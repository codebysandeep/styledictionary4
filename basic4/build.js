import StyleDictionary from 'style-dictionary';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log('Build started...');
console.log('\n==============================================');

// REGISTER THE CUSTOM TRANSFORMS

// REGISTER THE CUSTOM TRANSFORM GROUPS
console.log(StyleDictionary.transformGroup['group_name']);

export default {
  hooks: {
    formats: {},
    transforms: {},
  }
};


// APPLY THE CONFIGURATION
// IMPORTANT: the registration of custom transforms
// needs to be done _before_ applying the configuration
const sd = new StyleDictionary(__dirname + '/config.json');

// FINALLY, BUILD ALL THE PLATFORMS
await sd.buildAllPlatforms();

console.log('\n==============================================');
console.log('\nBuild completed!');