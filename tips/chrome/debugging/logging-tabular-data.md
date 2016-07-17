## Logging tabular data using `console.table`

### Summary
`console.table` renders tabular information in a table, making it super easy to read information.  

### Syntax
```javascript
console.table(<data>)
```

|               | Option | Description                           |
| :-----------: | ------ | ------------------------------------- |
| :exclamation: | data   | An array of data (objects preferable) |
   
### Example
```javascript
console.table([
  { 
    id: 1, 
    name: 'John', 
    address: 'Bay street 1'
  }, 
  {
    id: 2, 
    name: 'Jack', 
    address: 'Valley road 2.'
  }, 
  {
    id: 3, 
    name: 'Jim', 
    address: 'Hill street 3.' 
  }
])
```

# Output
| id    | name | address       |
| :---: | ---- | ------------- |
| 1     | John | Bay street 1  |
| 2     | Jack | Valley road 2 |
| 3     | Jim  | Hill street 3 |

### References
Tabular logs \([http://www.zsoltnagy.eu/javascript-debugging-tips-and-tricks](http://www.zsoltnagy.eu/javascript-debugging-tips-and-tricks)\)

### Tags
[#tip](../../tips.md)  
[#chrome](../chrome.md)  
[#debugging](debugging.md)