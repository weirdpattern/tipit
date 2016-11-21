## Using the DebuggerStepThrough attribute

### Summary
Allows the developer to specify pieces of code that shouldn't be debugged.  
This is especially useful when dealing with IoC/AOP frameworks that contain tons of interceptors that shouldn't be debugged.

### Syntax
```csharp
[DebuggerStepThrough]
```

### Example
```csharp
static void Main(string[] args)
{
    FirstMethod();
}

static void FirstMethod()
{
    SecondMethod();
}

[DebuggerStepThrough]
static void SecondMethod()
{
    ThirdMethod();
}

static void ThirdMethod()
{

}
```

### Output
Without DebuggerStepThrough
![Without](https://cloud.githubusercontent.com/assets/19519411/20484757/5e90222a-afbe-11e6-9796-8a910420bf07.png)   

With DebuggerStepThrough
![With](https://cloud.githubusercontent.com/assets/19519411/20484760/6001d13a-afbe-11e6-960a-f4b47492d770.png)   

### References
\[DebuggerStepThrough\] \([http://www.debuggerstepthrough.com/2013/01/some-good-to-know-c-attributes.html](http://www.debuggerstepthrough.com/2013/01/some-good-to-know-c-attributes.html)\)  

### Tags
[#tip](../../tips.md)  
[#c#](../csharp.md)  
[#attributes](attributes.md)