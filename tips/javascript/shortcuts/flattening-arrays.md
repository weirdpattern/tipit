## Flattening arrays with a single line

### Summary
Allows the developer to flatten an array that can contain multiple arrays.

### Syntax
```javascript
function flatten(array) {
  return array.reduce(function(flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten)
  }, []);
}
```

### Example
```javascript
function flatten(array) {
  return array.reduce(function(flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten)
  }, []);
}

var array = [1, [2, 3], [[4], [5, 6]], 7];
console.log(flatten(array)); // [1, 2, 3, 4, 5, 6, 7]
```

### Output
![output](https://cloud.githubusercontent.com/assets/19519411/23529379/fd1b0114-ff62-11e6-8062-bb3820201744.png)

### References
Merge/flatten an array of arrays in JavaScript \([Stack Overflow](http://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays-in-javascript/15030117#15030117)\)

### Tags
[#tip](../../tips.md)  
[#javascript](../javascript.md)  
[#shortcuts](shortcuts.md)