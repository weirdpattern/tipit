## Using the DebuggerBrowsable attribute

### Summary
Allows the developer to control how a member of a class will be displayed in the debugger window.  

### Syntax
```csharp
[DebuggerBrowsable(<browsable_state>)]
```

|               | Option          | Description                                                                           |
| :-----------: | --------------- | ------------------------------------------------------------------------------------- |
| :exclamation: | browsable_state | The browsable state of the decorated property (one of: never, collapsed, root hidden) |  

### Example
```csharp
public class World
{
    [DebuggerBrowsable(DebuggerBrowsableState.RootHidden)]
    public List<Person> People { get; set; }
}

public class Person
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Sex { get; set; }
}
```

### Output
Without DebuggerBrowsable
![Without](https://cloud.githubusercontent.com/assets/19519411/20671035/493e34ce-b541-11e6-817b-11b91cf9c4b7.png)   

With DebuggerBrowsable in People attribute
![With](https://cloud.githubusercontent.com/assets/19519411/20671034/493d70ac-b541-11e6-9cbb-3c31f5cc20a8.png)

With DebuggerBrowsable in People attribute and Id
![WithFull](https://cloud.githubusercontent.com/assets/19519411/20671033/493d38da-b541-11e6-9769-47f0641864dc.png)   

### References
DebuggerBrowsableAttribute Class \([https://msdn.microsoft.com/en-us/library/system.diagnostics.debuggerbrowsableattribute(v=vs.110).aspx](https://msdn.microsoft.com/en-us/library/system.diagnostics.debuggerbrowsableattribute(v=vs.110).aspx)\)  

### Tags
[#tip](../../tips.md)  
[#c#](../csharp.md)  
[#attributes](attributes.md)