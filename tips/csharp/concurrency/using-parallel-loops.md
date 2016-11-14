## Using parallel loops to process information faster

### Summary
Allows the developer to process information faster by running processes in parallel.

### Syntax
```csharp
Parallel.ForEach(<enumerable-object>, (<item>) => { 
  // process each item in parallel
});
```

|               | Option            | Description                                      |
| :-----------: | ----------------- | ------------------------------------------------ |
| :exclamation: | enumerable-object | An object implementing the IEnumerable interface |
| :exclamation: | item              | An item inside the enumerable-object             |

### Example
```csharp
// outputs 0, 10, 20, 30, 40, 50, 60, 70, 80, 90
// but in no particular order as all processes are racing to get to the Console.WriteLine statement
var numbers = Enumerable.Range(0, 10).AsParallel();
Parallel.ForEach(numbers, (num) => {
    Console.WriteLine(num * 10);
}); 
```

### Output
![Output](https://cloud.githubusercontent.com/assets/19519411/20269032/1fdb4c5c-aa47-11e6-9237-8a29edb23c04.png)  

### References
How to: Write a Simple Parallel.ForEach Loop \([https://msdn.microsoft.com/en-us/library/dd460720(v=vs.110).aspx](https://msdn.microsoft.com/en-us/library/dd460720(v=vs.110).aspx)\)   

### Tags
[#tip](../../tips.md)  
[#c#](../csharp.md)  
[#concurrency](concurrency.md)