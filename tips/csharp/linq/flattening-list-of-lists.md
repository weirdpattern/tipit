## Flattening a list of lists

### Summary
Provides the developer with a simple tool to flatten enumerable collections containing other enumerable items without looping through each one of them.  

### Syntax
```csharp
<enumerable-object>.SelectMany(item => item);
```

|               | Option            | Description                                                                                                      |
| :-----------: | ----------------- | ---------------------------------------------------------------------------------------------------------------- |
| :exclamation: | enumerable-object | An object implementing the IEnumerable interface and containing enumerable items (IEnumerable<IEnumerable<any>>) |

### Examples
```csharp
var list = new List<int[]>();
list.Add(new int[]{ 0, 1, 2, 3 });
list.Add(new int[]{ 4, 5, 6, 7 });
list.Add(new int[]{ 8, 9, 10, 11 });

// logs 1 2 3 4 5 6 7 8 9 10 11, but requires 2 loops
foreach (var item in list.Select(i => i)) {
    foreach (var subitem in item) {
        Console.Write(string.Format("{0} ", subitem));
    }   
}

// logs 1 2 3 4 5 6 7 8 9 10 11
foreach (var item in list.SelectMany(i =>i)) {
    Console.Write(string.Format("{0} ", item));
}
```  

### Output
![Output](https://cloud.githubusercontent.com/assets/19519411/20180351/c341b618-a71f-11e6-8e34-f9fe6e968f56.png)  

### References
Enumerable.SelectMany \([https://msdn.microsoft.com/en-us/library/bb534336(v=vs.110).aspx](https://msdn.microsoft.com/en-us/library/bb534336(v=vs.110).aspx)\)  

### Tags  
[#tip](../../tips.md)  
[#csharp](../csharp.md)  
[#linq](linq.md)  