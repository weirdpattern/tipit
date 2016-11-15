## Fill an enumerable with predefined values with a single line

### Summary
Create an enuemrable of a specific length pre-populated with values.

### Syntax
```csharp
Enumerable.Range(0, <length>).Select(<mapping_function>).[ToList() | ToArray() | ToDictionary() | ToLookup()];
```

|               | Option           | Description                                          |
| :-----------: | ---------------- | ---------------------------------------------------- |
| :exclamation: | length           | The length of the enuemrable we want to create       |
| :exclamation: | mapping_function | A function to customize the values of the enumerable |

### Example
```csharp
// logs 0, 1, 2, 3, 4
var items = Enumerable.Range(0, 5).Select(item => string.Format("{0} ", item));
foreach (var item in items) {
    Console.Write(item);
}

// logs 10px, 11px, 12px, 13px, 14px, 15px, 16px, 17px, 18px, 19px
var items = Enumerable.Range(0, 10).Select(item => string.Format("{0}px ", item + 10)); 
foreach (var item in items) {
    Console.Write(item);
}
```

### Output
![Output](https://cloud.githubusercontent.com/assets/19519411/20180350/c337dc74-a71f-11e6-9c20-1fadb7001602.png)  

### References
Enumerable.Range \([https://www.dotnetperls.com/enumerable-range](https://www.dotnetperls.com/enumerable-range)\)   

### Tags
[#tip](../../tips.md)  
[#c#](../csharp.md)  
[#linq](linq.md)