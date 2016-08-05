## Destructuring assignment

### Summary
Allows the user to extract data from arrays or objects into distinct values without the need of creating an intermediate objects or even accessing indexes and keys.

### Syntax
```javascript
[<var1>, <var2>] = [<var2>, <var1>]
[<var1>, <var2>, ...<rest>] = <array>
({ <key1>, <key2> } = { <key1>:<value1>, <key2>:<value2> })
({ <key1>, <key2>, ...<rest> } = { <key1>:<value1>, <key2>:<value2>, <key3>:<value3>, <key4>:<value4> })
```

### Example
```javascript
let a, b, rest;

[a, b] = [1, 2];
console.log(a); // logs 1
console.log(b); // logs 2

[a, b, ...rest] = [1, 2, 3, 4, 5]
console.log(a); // logs 1
console.log(b); // logs 2
console.log(rest); // logs [3, 4, 5]

({ a, b } = { a: 1, b: 2 })
console.log(a); // logs 1
console.log(b); // logs 2

({ a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 });
 console.log(a); // logs 1
 console.log(b); // logs 2
 console.log(rest); // logs { c: 3, c: 4 } 
```

### References
Destructuring assignment \([https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)\)

### Tags
[#tip](../../tips.md)  
[#javascript](../javascript.md)  
[#es2015](es2015.md)