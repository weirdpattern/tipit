## Using the Conditional attribute

### Summary
Indicates to compilers that a method call or attribute should be ignored unless a specified conditional compilation symbol is defined.

### Syntax
```csharp
[Conditional(<compilation_symbol>)]
```

|               | Option             | Description                                                                                   |
| :-----------: | ------------------ | --------------------------------------------------------------------------------------------- |
| :exclamation: | compilation_symbol | The conditional compilation symbol that will enable this method (DEBUG, RELEASE, CUSTOM, etc) |  

### Example
```csharp
static void Main(string[] args)
{
    FirstMethod();
    Console.WriteLine("Main Method");
}

static void FirstMethod()
{
    SecondMethod();
    Console.WriteLine("First Method");
}

[Conditional("DEBUG")]
static void SecondMethod()
{
    ThirdMethod();
    Console.WriteLine("Second Method");
}

static void ThirdMethod()
{
    Console.WriteLine("Third Method");
}
```

### Output
Without Conditional
![Without](https://cloud.githubusercontent.com/assets/19519411/20565200/2af878b0-b156-11e6-8840-5f5f046266b2.png)   

With Conditional in DEBUG mode
![WithDebug](https://cloud.githubusercontent.com/assets/19519411/20565198/2af5a220-b156-11e6-839a-e49dfdb0efde.png)

With Conditional in RELEASE mode
![WithRelease](https://cloud.githubusercontent.com/assets/19519411/20565199/2af802f4-b156-11e6-9a40-7dde64af7490.png)   

### References
ConditionalAttribute Class \([https://msdn.microsoft.com/en-us/library/system.diagnostics.conditionalattribute(v=vs.110).aspx](https://msdn.microsoft.com/en-us/library/system.diagnostics.conditionalattribute(v=vs.110).aspx)\)  

### Tags
[#tip](../../tips.md)  
[#c#](../csharp.md)  
[#attributes](attributes.md)