## Swapping the value of two variables.

### Summary
Swaps the value of two variables using a single line of code.

### Syntax
```javascript
<var1> = [<var1>, <var2> = <var1>][0];
```

### Example
```javascript
let a = 'hello';
let b = 'good bye';

a = [a, a = b][0];

console.log(a); // logs 'good bye'
console.log(b); // logs 'hello';
```

### References
How to swap two variables in JavaScript \([Stack Overflow](http://stackoverflow.com/questions/16201656/how-to-swap-two-variables-in-javascript#answer-16201730)\)

### Tags
[#tip](../../tips.md)  
[#javascript](../javascript.md)  
[#general](general.md)