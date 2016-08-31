## Standalone script blocks

### Summary
Allows the developer to define blocks of code outside of the normal loop or if/else statements.  
Each block maintains its own scope, so variables declared with `const` or `let` can only be used within that block.  

In a named block, the developer can use the reserve keyword `break` followed by named of the block to exit it.  
You cannot do this in an anonymous block (you will get a syntax error).  
 
### Syntax
```javascript
// anonymous blocks
{
  [statements]
}

// named blocks
[label]: {
  [statements]
}
```

|       | Option    | Description           |
| :---: | --------- | --------------------- |
|       | label     | The name of the block |

### Examples
```javascript
function block(include) {
  body: {
    console.log('entering block');
  
    if (!include) {
      console.log('skipping block');
      
      // break the named block, next console.log statement shouldn't execute
      break body;  
    }
    
    console.log('exiting block');
  }

  console.log('outside block')
}    

console.log('-> do not skip');
block(false);
// do not skip
// entering block
// skipping block
// outside block

console.log('');

console.log('-> skip');
block(true);
// skip
// entering block
// exiting block
// outside block
```

### Output
![Named Script Block](https://cloud.githubusercontent.com/assets/19519411/18149262/c9d6f8d8-6fa4-11e6-990a-dd3048667813.png)

### References
Expressions versus statements in JavaScript \([http://www.2ality.com/2012/09/expressions-vs-statements.html](http://www.2ality.com/2012/09/expressions-vs-statements.html)\)

### Tags
[#tip](../../tips.md)  
[#javascript](../javascript.md)  
[#general](general.md)