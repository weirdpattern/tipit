## Using the DebuggerHidden attribute

### Summary
Allows the developer to specify pieces of code that shouldn't be debugged and shouldn't be part of the stack trace.  
This is especially useful when dealing with IoC/AOP frameworks that contain tons of interceptors that shouldn't be debugged.

### Syntax
```csharp
[DebuggerHidden]
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

[DebuggerHidden]
static void SecondMethod()
{
    ThirdMethod();
}

static void ThirdMethod()
{

}
```

### Output
Without DebuggerHidden
![Without](https://cloud.githubusercontent.com/assets/19519411/20484757/5e90222a-afbe-11e6-9796-8a910420bf07.png)   

With DebuggerHidden
![With](https://cloud.githubusercontent.com/assets/19519411/20526003/bb0a3abc-b087-11e6-92a5-ef6167b4dd57.png)

### References
Tips on Debugging: Using DebuggerHidden attribute \([http://www.codeproject.com/Articles/109035/Tips-on-Debugging-Using-DebuggerHidden-attribute](http://www.codeproject.com/Articles/109035/Tips-on-Debugging-Using-DebuggerHidden-attribute)\)  

### Tags
[#tip](../../tips.md)  
[#c#](../csharp.md)  
[#attributes](attributes.md)