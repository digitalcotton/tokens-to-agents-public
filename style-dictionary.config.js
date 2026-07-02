/**
 * Three-tier DTCG tokens compiled to a single CSS custom-property file.
 * Values pass through verbatim (only the name is transformed to kebab-case),
 * and references are preserved as var(), so semantic and component tokens
 * compile to var(--primitive) rather than a flattened raw value. The output
 * is the single source of style: regenerate it, never hand-edit it.
 */
export default {
  source: ['tokens/**/*.tokens.json'],
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
        }
      ]
    }
  }
};
