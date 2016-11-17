## Lazy loading of objects

### Summary
Allows the developer to load objects only when required in an easy, thread-safe, simple way.  

### Syntax
```csharp
var instance = new Lazy<<class_name>>([init_function]);
```  

|               | Option        | Description                                        |
| :-----------: | ------------- | -------------------------------------------------- |
| :exclamation: | class_name    | The class to be instantiated                       |
|               | init_function | The function to be used to initialize the instance |  

### Example
```csharp
public class AutomaticGuid
{
    public Guid ID { get; private set; }

    public AutomaticGuid()
    {
        Console.WriteLine("Generating a new Guid");
        ID = Guid.NewGuid();
    }
}

var instance = new Lazy<AutomaticGuid>();

// outputs false
Console.WriteLine(instance.IsValueCreated);

// outputs Generating a new Guid
var value = instance.Value;

// outputs true
Console.WriteLine(instance.IsValueCreated);
```  

### Output
![Output](https://cloud.githubusercontent.com/assets/19519411/20394080/e477fcbe-aca3-11e6-8811-34301b687cab.png)  

### References  
Lazy Constructor \([https://msdn.microsoft.com/en-us/library/dd642329(v=vs.110).aspx](https://msdn.microsoft.com/en-us/library/dd642329(v=vs.110).aspx)\)  

### Tags
[#tip](../../tips.md)  
[#c#](../csharp.md)  
[#concurrency](concurrency.md)