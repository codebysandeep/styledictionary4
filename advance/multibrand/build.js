import StyleDictionary from 'style-dictionary';

// REGISTER THE CUSTOM TRANSFORMS

StyleDictionary.registerTransform({
  name: 'size/px', // notice: the name is an override of an existing predefined method (yes, you can do it)
  type: 'value',
  filter: function (token) {
    // this is an example of a possible filter (based on the "cti" values) to show how a "filter" works
    console.log(token);
    return token.type === 'fontSize' || token.type === 'dimension';
  },
  transform: function (token) {
    return `${token.value}px`;
  },
});

function getStyleDictionaryConfig(brand, platform) {
  return {
    source: [`tokens/brands/${brand}/*.json`, `tokens/globals/**/*.json`],
    platforms: {
      web: {
        transformGroup: 'web',
        buildPath: `build/web/${brand}/`,
        files: [
          {
            destination: 'tokens.scss',
            format: 'scss/variables',
          },
          {
            destination: 'tokens.css',
            format: 'css/variables',
          },
        ],
      },
    },
  };
}

console.log('Build started...');

['brand-1', 'brand-2'].map(function (brand) {
  ['web'].map(function (platform) {
    console.log('\n==============================================');
    console.log(`\nProcessing: [${platform}] [${brand}]`);

    const sd = new StyleDictionary(getStyleDictionaryConfig(brand, platform));
    sd.buildPlatform(platform);
  });
});

console.log('\n==============================================');
console.log('\nBuild completed!');
