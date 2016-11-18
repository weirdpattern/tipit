## Using the DebuggerDisplay attribute

### Summary
Controls the way an object, property or field is displayed in the debugger variable window.  
The attribute can be used in classes, delegates, properties, fields and assemblies.

### Syntax
```csharp
[DebuggerDisplay({<expression,[nq]>})]
```

|               | Option     | Description                                    |
| :-----------: | ---------- | ---------------------------------------------- |
| :exclamation: | expression | The expression to be evaluated                 |  
|               | nq         | Removes quotes from the expression (no quotes) |

### Example
```csharp
[DebuggerDisplay("{FirstName,nq} {LastName,nq} is a Person")]
public class Person 
{
    public string FirstName { get; set; }
    public string LastName { get; set; }

    public Person(string firstName, string lastName) 
    {
        FirstName = firstName;
        LastName = lastName;
    }
}

// will be displayed as "John Doe is a Person" in debugger window
var person = new Person("John", "Doe");
```

### Output
![Output](https://cloud.githubusercontent.com/assets/19519411/20432197/a49f88c6-ad63-11e6-97b0-9a1719ef00bc.png)   

### References
Using the DebuggerDisplay attribute \([https://msdn.microsoft.com/en-us/library/x810d419.aspx](https://msdn.microsoft.com/en-us/library/x810d419.aspx)\)  

### Tags
[#tip](../../tips.md)  
[#c#](../csharp.md)  
[#attributes](attributes.md)