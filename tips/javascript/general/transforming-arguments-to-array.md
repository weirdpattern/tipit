## Transforming `arguments` to array

### Summary
Allows the developer to get an array representation of the global arguments variable.  

### Syntax
```javascript
const array = Array.prototype.slice.call(arguments);
```

### Examples
```javascript
function fn() {
  const array = Array.prototype.slice.call(arguments);

  console.log(arguments);  
  console.log(array);
}
```

### Output
![Output](https://cloud.githubusercontent.com/assets/19519411/21610534/223356ac-d18e-11e6-8cb2-cbc10aa68355.png)

### References
45 Useful JavaScript Tips, Tricks and Best Practices \([https://modernweb.com/45-useful-javascript-tips-tricks-and-best-practices/](https://modernweb.com/45-useful-javascript-tips-tricks-and-best-practices/)\)

### Tags
[#tip](../../tips.md)  
[#javascript](../javascript.md)  
[#general](general.md)