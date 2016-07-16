## The many different ways of borrowing methods in JavaScript

### Summary
Describes 3 different ways a developer can borrow methods in JavaScript.  
JavaScript is a very dynamic language. Methods can be easily overridden, thus changing it's base implementation, so in order to play it safe, we borrow methods from the native objects (although this is not a restriction, any method of any object can be borrowed using the same syntax).  

### Syntax
- The popular way (call)
```javascript
// through assignment
const method = <class>.prototype.<method>;
method.call(this, [...args]);

// direct call
<class>.prototype.<method>.call(this, [...args]);
```

- The compact way (using literals)
```javascript
// through assignment
const method = <literal>.<method>;
method.call(this, [...args]);

// direct call
<literal>.<method>.call(this, [...args]);
```

- The elegant way (function binding)
```javascript
// through assignment
const method = Function.prototype.call.bind(<class>.prototype.<method>);
method([...args]);

// direct call is impractical
```

### Example
- The popular way (call)
```javascript
const slice = Array.prototype.slice;
const myArray = [1, 2, 3, 4];

console.log(slice.call(myArray, 2));
// logs [3, 4]
// myArray becomes the <this> argument
// 2 represents the first argument of the slice method (index)
```

- The compact way (using literals)
```javascript
const slice = [].slice;
const myArray = [1, 2, 3, 4];

console.log(slice.call(myArray, 2));
// logs [3, 4]
// myArray becomes the <this> argument
// 2 represents the first argument of the slice method (index)
```

- The elegant way (function binding)
```javascript
const slice = Function.prototype.call.bind(Array.prototype.slice);
const myArray = [1, 2, 3, 4];

console.log(slice(myArray, 2));
// logs [3, 4]
// no .call(), as the function is already bind!!
// myArray becomes the <this> argument
// 2 represents the first argument of the slice method (index)
```

### References
Borrowing Methods in JavaScript \([http://davidshariff.com/blog/borrowing-methods-in-javascript](http://davidshariff.com/blog/borrowing-methods-in-javascript)\)
Don't repeat yourself \([https://en.wikipedia.org/wiki/Don%27t_repeat_yourself](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)\)

### Tags
[#tip](../../tips.md)  
[#javascript](../javascript.md)  
[#general](general.md)