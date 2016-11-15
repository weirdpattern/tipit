## Fill an array with predefined values with a single line

### Summary
Create an array of a specific length pre-populated with values.

### Syntax
```javascript
// ES5
Array.apply(null, Array(<length>)).map(<mapping_function>);

// ES2015 (ES6)
Array.from(Array(<length>), <mapping_function>);
Array(<length>).fill(value, [start=0], [end=this.length]).map(<mapping_function>);
```

|               | Option           | Description                                                                                         |
| :-----------: | ---------------- | --------------------------------------------------------------------------------------------------- |
| :exclamation: | length           | The length of the array we want to create                                                           |
| :exclamation: | mapping_function | A function to customize the values of the array in the form `(ignore : any, index : number) => any` |
| :exclamation: | value            | The initial value for all elements of the array                                                     |
|               | start            | The index where to start filling values                                                             |
|               | end              | The index where to stop filling values                                                              |

### Example
```javascript
// ES5
Array.apply(null, Array(5)).map((_, i) => i); 
// [0, 1, 2, 3, 4]

Array.apply(null, Array(5)).map((_, i) => `${i + 10}px`); 
// ['10px', '11px', '12px', '13px', '14px']

// ES2015 (ES6)
Array.from(Array(5), (_, i) => i); 
// [0, 1, 2, 3, 4]

Array.from(Array(5), (_, i) => `${i + 10}px`); 
// ['10px', '11px', '12px', '13px', '14px']

Array(5).fill(1).map((_, i) => i); 
// [0, 1, 2, 3, 4] 
```

### Outputs
![Array.apply](https://cloud.githubusercontent.com/assets/19519411/17607287/77a84914-5fea-11e6-8b90-1aee341920a1.png)
![Array.from](https://cloud.githubusercontent.com/assets/19519411/17607302/90595390-5fea-11e6-9a77-1328598327dd.png)
![Array.fill](https://cloud.githubusercontent.com/assets/19519411/17626332/7bcd8594-6072-11e6-8d2f-73a2d52b3d59.png)

### References
Initializing an array with values \([http://www.2ality.com/2013/11/initializing-arrays.html](http://www.2ality.com/2013/11/initializing-arrays.html)\)   
Array.prototype.fill \([https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)\)

### Tags
[#tip](../../tips.md)  
[#javascript](../javascript.md)  
[#shortcuts](shortcuts.md)