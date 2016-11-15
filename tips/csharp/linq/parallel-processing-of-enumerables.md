## Parallel processing of enumerables

### Summary
Allows the developer to process information in parallel thus improving performance of the application.  

### Syntax
```csharp
<enumerable_object>.AsParallel().[other_enumerable_operations];
```

|               | Option                      | Description                                      |
| :-----------: | --------------------------- | ------------------------------------------------ |
| :exclamation: | enumerable_object           | An object implementing the IEnumerable interface |
|               | other_enumerable_operations | Any subsequent operation performed in parallel   |

### Examples
```csharp
// outputs 0, 10, 20, 30, 40, 50, 60, 70, 80, 90
// but in no particular order as all processes are racing to get to the Console.WriteLine statement
var numbers = Enumerable.Range(0, 10).AsParallel();
numbers.ForAll(num => Console.WriteLine(num * 10)); 
```  

### Output
![Output](https://cloud.githubusercontent.com/assets/19519411/20216542/e2e09db0-a7e0-11e6-8ce6-0457f1f8331b.png)  

### References
How to: Create and Execute a Simple PLINQ Query \([https://msdn.microsoft.com/en-us/library/dd460714(v=vs.110).aspx](https://msdn.microsoft.com/en-us/library/dd460714(v=vs.110).aspx)\)  

### Tags  
[#tip](../../tips.md)  
[#c#](../csharp.md)  
[#linq](linq.md)  