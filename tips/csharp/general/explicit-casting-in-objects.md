## Casting in objects using the explicit operator

### Summary
Allows the developer to specify the way a cast operation between two classes should work.  

### Syntax
```csharp
public class <class_name>
{
    public static explicit operator <class_name>(<source_class_name>)
    {
        return new <class_name> {
            // mapping of properties 
        }
    }    
}
```

### Examples
```csharp
public class Celsius
{
    public float Degrees { get; private set; }

    public Celsius(float temp)
    {
        Degrees = temp;
    }

    public static explicit operator Celsius(Farenheit temp) 
    {
        return new Celsius((5.0f / 9.0f) * (temp.Degrees - 32));
    }
}

public class Farenheit
{
    public float Degrees { get; private set; }

    public Farenheit(float temp)
    {
        Degrees = temp;
    }

    public static explicit operator Farenheit(Celsius temp)
    {
        return new Farenheit((9.0f / 5.0f) * temp.Degrees + 32);
    }
}

var celsius = new Celsius(0);
var farenheit = (Farenheit)celsius;

// outputs 32
Console.WriteLine(farenheit.Degrees); 

var farenheit = new Farenheit(32);
var celsius = (Celsius)farenheit;

// outputs 0
Console.WriteLine(celsius.Degrees); 
```

### Output
![Output](https://cloud.githubusercontent.com/assets/19519411/20350185/7981d388-abd3-11e6-860c-5438ba9add66.png)

### References
explicit (C# Reference) \([https://msdn.microsoft.com/en-us/library/xhbhezf4.aspx](https://msdn.microsoft.com/en-us/library/xhbhezf4.aspx)\)

### Tags
[#tip](../../tips.md)  
[#c#](../csharp.md)  
[#general](general.md)