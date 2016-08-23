## Truncate a value and always return a number using ~~

### Summary
Coerces a value to number, then truncates its the real portion (returning just an integer).  
If the value cannot be coerced to number, then 0 is returned.  

Very useful when dealing with values and don't want to validate the data before using it (not that I'm recommending you to do it).

### Syntax
```javascript
~~<value>
```

|               | Option | Description                        |
| :-----------: | ------ | ---------------------------------- |
| :exclamation: | value  | The value to be coerced and casted |

### Example
```javascript
console.log(~~12.34);   // logs 12
console.log(~~"56.78"); // logs 56
console.log(~~-2.6);    // logs -2
console.log(~~"Sunny"); // logs 0
console.log(~~[]);      // logs 0
console.log(~~null);    // logs 0
```

### Outputs
![Truncated values](https://cloud.githubusercontent.com/assets/19519411/17877260/664cd78c-68a7-11e6-9c04-6c94c688080a.png)

### References
13 JavaScript Tips & Tricks \([http://www.joshwright.com/tips/13-javascript-tips-and-tricks](http://www.joshwright.com/tips/13-javascript-tips-and-tricks)\)

### Tags
[#tip](../../tips.md)  
[#javascript](../javascript.md)  
[#shortcuts](shortcuts.md)