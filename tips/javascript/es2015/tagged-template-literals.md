## Tagged template literals

### Summary
Allows the developer to modify the output of template literals using a function.
   
### Syntax
```javascript
function <tag>(strings, ...replacements) {
  ...  
}

const output = <tag>`<template>`;
```

|               | Option       | Description                                                               |
| :-----------: | ------------ | ------------------------------------------------------------------------- |
| :exclamation: | tag          | The name of the tag you want to create                                    |
|               | strings      | An array with all the literal strings in template                         |
|               | replacements | An array with all the replace values. i.e. values like ${xxx} in template |
| :exclamation: | template     | The template to be rendered                                               |   

### Example
```javascript
/**
 * Join all lines and replace values, stripping all breaks from the output and trimming the output.
 * 
 * @param {Array.<string>} strings
 *        The strings of the template.
 * @param {Array.<any>} replacements
 *        The replacements inside the template
 * @returns {string} the joined string with no breaks or whitespaces.
 */
function oneline(strings, ...replacements) {
  const results = [strings[0]];
  replacements.forEach((replacement, index) => {
    results.push(replacement, strings[index + 1]);
  });      
  return results.join('').replace(/(?:\s+)/g, ' ').trim();
}

const value = 'with replacements';
const template = `
  This is just a test 
  ${value}
  and joining all lines at the very end.
`;

console.log('No tag');
console.log(template)
console.log('');
console.log('With tag');
console.log(oneline`${template}`);
```

### Output
![Output](https://cloud.githubusercontent.com/assets/19519411/17485828/7950cf7c-5d54-11e6-8b51-f9cae6fc8595.png)

### References
Tagged template literals \([https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)\)

### Tags
[#tip](../../tips.md)  
[#javascript](../javascript.md)  
[#es2015](es2015.md)
