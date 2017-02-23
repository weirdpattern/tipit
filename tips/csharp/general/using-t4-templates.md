## Using T4 templates to generate code

### Summary
Design-time T4 text templates let the developer generate program code and other files in a Visual Studio project. 
Typically, the developer would write the templates so that they vary the code that they generate according to data from a model. 

### Syntax
```csharp
<#@ [directives]] #>  
<# [execution_code] #>
<#= [expression_control_code] #>
<#+ [feature_block_code] #>
[template_code]
```

|       | Option                  | Description                                                                                      |
| :---: | ----------------------- | ------------------------------------------------------------------------------------------------ |
|       | directives              | Directives to indicate type of file, etc.                                                        |
|       | execution_code          | Code that gets execute to generate the final file                                                |
|       | expression_control_code | Evaluates an expression and convert it to string                                                 |
|       | feature_block_code      | Defines properties, methods, or any other code that should not be included in the main transform |
|       | template_code           | Blocks that you want to output in the final file                                                 |

### Example
```csharp
<#@ template debug="false" hostspecific="false" language="C#" #>  
<#@ output extension=".cs" #>  
<# var properties = new string [] {"P1", "P2", "P3"}; #>  
class MyGeneratedClass {  
<# 
  foreach (string propertyName in properties)  { 
#>  
  private int <#= propertyName #> = 0;  
<# 
  } 
#>  
}   
```

### output
```csharp
class MyGeneratedClass {  
  private int P1 = 0;   
  private int P2 = 0;  
  private int P3 = 0;  
}  
```

### References
Design-Time Code Generation by using T4 Text Templates \([https://msdn.microsoft.com/en-us/library/dd820620.aspx?f=255&MSPPError=-2147217396](https://msdn.microsoft.com/en-us/library/dd820620.aspx?f=255&MSPPError=-2147217396)\)

### Tags
[#tip](../../tips.md)  
[#c#](../csharp.md)  
[#general](general.md)