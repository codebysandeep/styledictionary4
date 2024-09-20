import StyleDictionary from 'style-dictionary';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log('Build started...');
console.log('\n==============================================');

// REGISTER THE CUSTOM TRANSFORMS
StyleDictionary.registerTransform({
  name: "attribute-color",
  type: "value",
  transitive: true,
  filter: (token) => {
    console.log(`token: ${token.name}, type: ${token.$value}`);
    return token.type === "color";
  },
  transform: (token) => {
    console.log(`token123: ${token.name}, type123: ${token.$value}`);
  },
});

// StyleDictionary.registerFilter({
//   name: "colors-only",
//   type: "value",
//   filter: (token) => {
//     console.log(`token: ${token.name}, type: ${token.type}`);
//     return token.type === "color";
//   },
// });


// REGISTER THE CUSTOM TRANSFORM GROUPS
StyleDictionary.registerTransformGroup({
  name: "css-group",
  transforms: ["attribute/cti", "name/kebab", "color/hex"],
});

StyleDictionary.registerTransformGroup({
  name: "web-group",
  transforms: ["attribute/cti", "name/camel", "attribute-color"],
});

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