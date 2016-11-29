## Getting caller information using attributes

### Summary
Allows the developer to obtain the member's name, full path, and line number of the source file that contains the caller.  

### Syntax
```csharp
[CallerMemberName] string <param_name>
[CallerFilePath]   string <param_name>
[CallerLineNumber] int <param_name>
```  

|               | Option     | Description                          |
| :-----------: | ---------- | ------------------------------------ |
| :exclamation: | param_name | The name of the parameter to be used | 

### Example
```csharp
public static class Tracer
{
    public static void Trace(
        string message, 
        [CallerMemberName] string method = "",
        [CallerFilePath] string filePath = "",
        [CallerLineNumber] int lineNumber = 0
    )
    {
        Console.WriteLine(string.Format("{0} [{1}, {2}]: {3}", method, filePath, lineNumber, message));
    }
}

Tracer.Trace("This is a message");
```

### Output
![Output](https://cloud.githubusercontent.com/assets/19519411/20713212/fe47d052-b60c-11e6-8632-e69b9baf8f16.png)

### References
Caller Attributes \([https://msdn.microsoft.com/en-us/library/system.runtime.compilerservices.callerfilepathattribute(v=vs.110).aspx](https://msdn.microsoft.com/en-us/library/system.runtime.compilerservices.callerfilepathattribute(v=vs.110).aspx)\)  

### Tags
[#tip](../../tips.md)  
[#c#](../csharp.md)  
[#attributes](attributes.md)