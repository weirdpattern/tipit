## The null conditional operator (`?.`)

### Summary
Used to test for null before performing a member access \(?.\) or index \(?[\) operation. 
These operators help you write less code to handle null checks, especially for descending into data structures.

### Syntax
```csharp
<class>?.<property>
<class>?[0]<element>
```

|               | Option   | Description                               |
| :-----------: | -------- | ----------------------------------------- |
| :exclamation: | class    | The class whose property or index we want |
| :exclamation: | property | The property we want to access            |
| :exclamation: | element  | The indexed element we want to access     |

### Examples
```csharp
// null if customers is null   
int? length = customers?.Length;

// null if customers is null    
Customer first = customers?[0]; 
```

### References
Null-conditional Operators \([https://msdn.microsoft.com/en-us/library/dn986595.aspx](https://msdn.microsoft.com/en-us/library/dn986595.aspx)\)

### Tags
[#tip](../../tips.md)  
[#c#](../csharp.md)  
[#general](general.md)