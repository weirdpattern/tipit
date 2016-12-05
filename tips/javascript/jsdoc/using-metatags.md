## Using meta-tags

### Summary  
Allows the developer to specify tags that apply to more than one element without repeating the tags.  

### Syntax  
```javascript
/**#@+
 * <tags>
 */

// code

/**#@-*/
```  

|               | Option | Description                                                         |
| :-----------: | ------ | ------------------------------------------------------------------- |
| :exclamation: | tags   | the tags to be included for every piece of code between #@+ and #@- |  

### Examples
```javascript
/** @module utils */ 

/**#@+
 * @memberOf utils
 * @public
 */ 

/**
 * Determines if `value` is a function.
 * @param   {any}     value the value to be evaluated.
 * @returns {boolean}       `true` when `value` is a function.
 */
function isFunction(value) {
  // code
}

/**
 * Determines if `value` is an object.
 * @param   {any}     value the value to be evaluated.
 * @returns {boolean}       `true` when `value` is an object.
 */
function isObject(value) {
  // code
}

/**#@-*/
```  

### References
An introduction to JSDoc \([http://www.2ality.com/2011/08/jsdoc-intro.html](http://www.2ality.com/2011/08/jsdoc-intro.html)\)

### Tags  
[#tip](../../tips.md)  
[#javascript](../javascript.md)  
[#jsdoc](jsdoc.md)