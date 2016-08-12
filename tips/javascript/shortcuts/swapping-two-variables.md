## Swapping the value of two variables.

### Summary
Swaps the value of two variables using a single line of code.

### Syntax
```javascript
// ES5
<var1> = [<var1>, <var2> = <var1>][0];

// ES2015 (ES6)
[<var1>, <var2>] = [<var2>, <var1>];
```

### Example
```javascript
// ES5 
let a = 'hello';
let b = 'good bye';

a = [a, a = b][0];

console.log(a); // logs 'good bye'
console.log(b); // logs 'hello'

// ES2015 (ES6)
let c = 'John';
let d = 'Smith';

[c, d] = [d, c];

console.log(a); // logs 'Smith'
console.log(b); // logs 'John'
```

### References
How to swap two variables in JavaScript \([Stack Overflow](http://stackoverflow.com/questions/16201656/how-to-swap-two-variables-in-javascript#answer-16201730)\)

Swapping variable values via destructuring \([http://www.2ality.com/2016/05/six-nifty-es6-tricks.html#swapping-variable-values-via-destructuring](http://www.2ality.com/2016/05/six-nifty-es6-tricks.html#swapping-variable-values-via-destructuring)\)

### Tags
[#tip](../../tips.md)  
[#javascript](../javascript.md)  
[#shortcuts](shortcuts.md)