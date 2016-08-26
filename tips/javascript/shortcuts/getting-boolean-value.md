## Getting a boolean value from any value using `!!`

### Summary
Coerces a value to boolean (falsy values will return false, truthy values will return true).  
The double not (`!!`) is not an operator, it's just the not operator (`!`) called twice. 

### Syntax
```javascript
!!<value>
```

|               | Option | Description             |
| :-----------: | ------ | ----------------------- |
| :exclamation: | value  | The value to be coerced |

### Example
```javascript
console.log(!!null);      // => logs false
console.log(!!undefined); // => logs false
console.log(!!false);     // => logs false
console.log(!!0);         // => logs false
console.log(!!"");        // => logs false
console.log(!!NaN);       // => logs false

console.log(!!"test");    // => logs true
console.log(!!"0");       // => logs true
console.log(!!"false");   // => logs true
console.log(!!true);      // => logs true
console.log(!!-1);        // => logs true
console.log(!!1);         // => logs true
console.log(!![]);        // => logs true
console.log(!![1]);       // => logs true
```

### Outputs
![Boolean values](https://cloud.githubusercontent.com/assets/19519411/17992181/d31b8114-6b0a-11e6-8ef7-3e44dbf0b044.png)

### References
What is the !! (not not) operator in JavaScript \([Stack Overflow](http://stackoverflow.com/questions/784929/what-is-the-not-not-operator-in-javascript/784946#784946)\)

### Tags
[#tip](../../tips.md)  
[#javascript](../javascript.md)  
[#shortcuts](shortcuts.md)