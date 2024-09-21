import StyleDictionary from 'style-dictionary';

// REGISTER THE CUSTOM TRANSFORMS

// REGISTER THE CUSTOM TRANSFORM GROUPS
StyleDictionary.registerTransformGroup({
  name: "web-group",
  transforms: ["attribute/cti", "name/camel"],
});

StyleDictionary.registerTransformGroup({
  name: "css-group",
  transforms: ["attribute/cti", "name/kebab"],
});

StyleDictionary.registerTransformGroup({
  name: "scss-group",
  transforms: ["attribute/cti", "name/kebab"],
});

StyleDictionary.registerTransformGroup({
  name: "json-group",
  transforms: ["attribute/cti", "name/kebab"],
});

function getStyleDictionaryConfig(brand, platform) {
  return {
    source: [`tokens/brands/${brand}/*.@(json|json5)`],
    platforms: {
      customWEB: {
        transformGroup: 'web-group',
        buildPath: `build/web/${brand}/js/`,
        files: [
          {
            destination: 'tokens.js',
            format: 'javascript/es6',
          }
        ],
      },

      customCSS: {
        transformGroup: 'css-group',
        buildPath: `build/web/${brand}/css/`,
        files: [
          {
            destination: 'tokens.css',
            format: 'css/variables',
          }
        ],
      },

      customSCSS: {
        transformGroup: 'scss-group',
        buildPath: `build/web/${brand}/scss/`,
        files: [
          {
            destination: 'tokens.scss',
            format: 'scss/variables',
          }
        ],
      },

      customJSON: {
        transformGroup: 'json-group',
        buildPath: `build/web/${brand}/json/`,
        files: [
          {
            destination: 'tokens.json',
            format: 'json',
          },
        ],
      },
    },
  };
}

console.log('Build started...');

['brand-1'].map(function (brand) {
  ['customWEB', 'customCSS', 'customSCSS', 'customJSON'].map(function (platform) {
    console.log('\n==============================================');
    console.log(`\nProcessing: [${platform}] [${brand}]`);

    const sd = new StyleDictionary(getStyleDictionaryConfig(brand, platform));
    sd.buildPlatform(platform);
  });
});

console.log('\n==============================================');
console.log('\nBuild completed!');
