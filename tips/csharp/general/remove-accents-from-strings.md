## Removes accents from strings using string normalization

### Summary
Allows the developer to replace accented characters with their non-accented characters.

### Syntax
```csharp
<string>.Normalize(NormalizationForm.FormD)
        .ToCharArray()
        .Where(c => CharUnicodeInfo.GetUnicodeCategory(c) != UnicodeCategory.NonSpacingMark)
        .ToString()
        .Normalize(NormalizationForm.FormC);
```

|               | Option | Description                 |
| :-----------: | ------ | --------------------------- |
| :exclamation: | string | The string to be normalized |

### Example
```csharp
var str = 'clué';
str = new string(
    str.Normalize(NormalizationForm.FormD)
       .ToCharArray()
       .Where(c => CharUnicodeInfo.GetUnicodeCategory(c) != UnicodeCategory.NonSpacingMark)
       .ToString()
).Normalize(NormalizationForm.FormC);

Console.Write(str); // outputs 'clue'
```

### References
What does .NET's String.Normalize do? \([Stack Overflow](http://stackoverflow.com/questions/3288114/what-does-nets-string-normalize-do/3288164#3288164)\)

### Tags
[#tip](../../tips.md)  
[#c#](../csharp.md)  
[#general](general.md)