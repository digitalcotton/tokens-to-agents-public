// Copyright (c) 2026 Ryan Payne. Licensed under the MIT License; see LICENSE.md at the repository root.
/**
 * Three-tier DTCG tokens compiled to a single CSS custom-property file.
 * Values pass through verbatim (only the name is transformed to kebab-case),
 * and references are preserved as var(), so semantic and component tokens
 * compile to var(--primitive) rather than a flattened raw value. The output
 * is the single source of style: regenerate it, never hand-edit it.
 *
 * A second file, themes.css, carries the dark theme: the same nine semantic
 * color tokens re-aliased to different steps of the same gray ramp under
 * :root[data-theme='dark']. No new tokens exist; dark mode is only a remap
 * of the semantic layer, which is the argument the site makes about tokens.
 */

/* The dark remap: semantic color token -> gray ramp step. Mirrors the
   inversion the /source flip demo performs. Every semantic color token in
   tokens/semantic.tokens.json must appear here; the format throws otherwise,
   so the two cannot drift apart silently. */
export const DARK_REMAP = {
  'surface': '950',
  'surface-inverse': '050',
  'foreground': '050',
  'foreground-inverse': '950',
  'muted': '400',
  'muted-inverse': '600',
  'line': '800',
  'line-strong': '600',
  'hover-surface': '800'
};

export default {
  source: ['tokens/**/*.tokens.json'],
  hooks: {
    formats: {
      'css/theme-dark': ({ dictionary }) => {
        const semantic = dictionary.allTokens.filter((t) => t.path[0] === 'color');
        const lines = semantic.map((t) => {
          const key = t.path.slice(1).join('-');
          const step = DARK_REMAP[key];
          if (!step) {
            throw new Error(`css/theme-dark: semantic token color.${key} has no dark remap`);
          }
          const target = dictionary.allTokens.find((g) => g.path[0] === 'gray' && g.path[1] === step);
          if (!target) {
            throw new Error(`css/theme-dark: dark remap for color.${key} points at missing primitive gray.${step}`);
          }
          return `  --${t.name}: var(--${target.name});`;
        });
        return [
          '/**',
          ' * Do not edit directly, this file was auto-generated.',
          ' * Dark theme: the semantic layer remapped onto the same gray ramp.',
          ' */',
          '',
          ":root[data-theme='dark'] {",
          ...lines,
          '}',
          ''
        ].join('\n');
      }
    }
  },
  platforms: {
    css: {
      transforms: ['name/kebab'],
      buildPath: 'build/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
            selector: ':root'
          }
        },
        {
          destination: 'themes.css',
          format: 'css/theme-dark'
        }
      ]
    }
  }
};
