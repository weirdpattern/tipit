## Making an assembly internals visible to another assembly

### Summary
Specifies that types that are ordinarily visible only within the current assembly are visible to a specified assembly.    

### Syntax
```csharp
[assembly:InternalsVisibleTo("<external_assembly>")]
```

|               | Option            | Description                                                             |
| :-----------: | ----------------- | ----------------------------------------------------------------------- |
| :exclamation: | external_assembly | The name of the external assembly to which internals will be exposed to |

### Example
Project "MyLibrary"
```csharp
using System;
using System.Runtime.CompilerServices;

[assembly: InternalsVisibleTo("MyLibrary.Tests")]
namespace Utilities.Strings
{
    public class Strings
    {
        internal static bool IsEmpty(string test)
        {
            return string.IsNullOrEmpty(test);
        }
    }
}
```  

Project "MyLibrary.Tests"
```csharp
using Utilities.Strings;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Utilities.Strings.Tests
{
    [TestClass]
    public class StringsTests
    {
        [TestClass]
        public class Positives
        {
            [TestMethod]
            public void IsEmpty() 
            {
                Assert.IsTrue(Strings.IsEmpty(""));
            }
        }

        [TestClass]
        public class Negatives
        {
            [TestMethod]
            public void IsEmpty() 
            {
                Assert.IsFalse(Strings.IsEmpty(" "));
            }
        }
    }
}
```

### References
InternalsVisibleToAttribute Class \([https://msdn.microsoft.com/en-us/library/system.runtime.compilerservices.internalsvisibletoattribute(v=vs.110).aspx](https://msdn.microsoft.com/en-us/library/system.runtime.compilerservices.internalsvisibletoattribute(v=vs.110).aspx)\)   

### Tags
[#tip](../../tips.md)  
[#c#](../csharp.md)  
[#general](general.md)