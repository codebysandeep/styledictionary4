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
            destination: 'module/tokens.module.js',
            format: 'javascript/module',
          },
          {
            destination: 'object/tokens.object.js',
            format: 'javascript/object',
          },
          {
            destination: 'es6/tokens.es6.js',
            format: 'javascript/es6',
          },
          


          {
            "destination": "module/tokens-color.module.js",
            "format": "javascript/module",
            "filter": { "$type": "color" }
          },
          {
            "destination": "module/tokens-dimension.module.js",
            "format": "javascript/module",
            "filter": { "$type": "dimension" }
          },
          {
            "destination": "module/tokens-typography.module.js",
            "format": "javascript/module",
            "filter": { "$type": "typography" }
          },
          {
            "destination": "module/tokens-transition.module.js",
            "format": "javascript/module",
            "filter": { "$type": "transition" }
          },
          {
            "destination": "module/tokens-border.module.js",
            "format": "javascript/module",
            "filter": { "$type": "border" }
          },
          {
            "destination": "module/tokens-shadow.module.js",
            "format": "javascript/module",
            "filter": { "$type": "shadow" }
          },
          {
            "destination": "module/tokens-fontFamily.module.js",
            "format": "javascript/module",
            "filter": { "$type": "fontFamily" }
          },
          {
            "destination": "module/tokens-fontSize.module.js",
            "format": "javascript/module",
            "filter": { "$type": "fontSize" }
          },
          {
            "destination": "module/tokens-fontWeight.module.js",
            "format": "javascript/module",
            "filter": { "$type": "fontWeight" }
          },
          {
            "destination": "module/tokens-number.module.js",
            "format": "javascript/module",
            "filter": { "$type": "number" }
          },



          {
            "destination": "object/tokens-color.object.js",
            "format": "javascript/object",
            "filter": { "$type": "color" }
          },
          {
            "destination": "object/tokens-dimension.object.js",
            "format": "javascript/object",
            "filter": { "$type": "dimension" }
          },
          {
            "destination": "object/tokens-typography.object.js",
            "format": "javascript/object",
            "filter": { "$type": "typography" }
          },
          {
            "destination": "object/tokens-transition.object.js",
            "format": "javascript/object",
            "filter": { "$type": "transition" }
          },
          {
            "destination": "object/tokens-border.object.js",
            "format": "javascript/object",
            "filter": { "$type": "border" }
          },
          {
            "destination": "object/tokens-shadow.object.js",
            "format": "javascript/object",
            "filter": { "$type": "shadow" }
          },
          {
            "destination": "object/tokens-fontFamily.object.js",
            "format": "javascript/object",
            "filter": { "$type": "fontFamily" }
          },
          {
            "destination": "object/tokens-fontSize.object.js",
            "format": "javascript/object",
            "filter": { "$type": "fontSize" }
          },
          {
            "destination": "object/tokens-fontWeight.object.js",
            "format": "javascript/object",
            "filter": { "$type": "fontWeight" }
          },
          {
            "destination": "object/tokens-number.object.js",
            "format": "javascript/object",
            "filter": { "$type": "number" }
          },




          {
            "destination": "es6/tokens-color.es6.js",
            "format": "javascript/es6",
            "filter": { "$type": "color" }
          },
          {
            "destination": "es6/tokens-dimension.es6.js",
            "format": "javascript/es6",
            "filter": { "$type": "dimension" }
          },
          {
            "destination": "es6/tokens-typography.es6.js",
            "format": "javascript/es6",
            "filter": { "$type": "typography" }
          },
          {
            "destination": "es6/tokens-transition.es6.js",
            "format": "javascript/es6",
            "filter": { "$type": "transition" }
          },
          {
            "destination": "es6/tokens-border.es6.js",
            "format": "javascript/es6",
            "filter": { "$type": "border" }
          },
          {
            "destination": "es6/tokens-shadow.es6.js",
            "format": "javascript/es6",
            "filter": { "$type": "shadow" }
          },
          {
            "destination": "es6/tokens-fontFamily.es6.js",
            "format": "javascript/es6",
            "filter": { "$type": "fontFamily" }
          },
          {
            "destination": "es6/tokens-fontSize.es6.js",
            "format": "javascript/es6",
            "filter": { "$type": "fontSize" }
          },
          {
            "destination": "es6/tokens-fontWeight.es6.js",
            "format": "javascript/es6",
            "filter": { "$type": "fontWeight" }
          },
          {
            "destination": "es6/tokens-number.es6.js",
            "format": "javascript/es6",
            "filter": { "$type": "number" }
          }



        ],
      },

      customCSS: {
        transformGroup: 'css-group',
        buildPath: `build/web/${brand}/css/`,
        files: [
          {
            destination: 'tokens-variables.css',
            format: 'css/variables',
          }
        ],
      },

      customSCSS: {
        transformGroup: 'scss-group',
        buildPath: `build/web/${brand}/scss/`,
        files: [
          {
            destination: 'tokens-variables.scss',
            format: 'scss/variables',
          },
          {
            destination: 'tokens-map-deep.scss',
            format: 'scss/map-deep',
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
          {
            destination: 'tokens.flat.json',
            format: 'json/flat',
          },
          {
            destination: 'tokens.nested.json',
            format: 'json/nested',
          }
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
