## Removing unused view engines

### Summary
Allows the developer to remove view engines that are not currently being used.  
This improves performance as the number of checks needed to find a resource are lowered (it only checks for files with valid extensions).    

### Syntax
```csharp
ViewEngines.Engines.Clear();
ViewEngines.Engines.Add(new RazorViewEngine());
```

### Examples
In global.asax
```csharp
protected void Application_Start()
{
  ViewEngines.Engines.Clear();
  ViewEngines.Engines.Add(new RazorViewEngine());
}
```

### Output
With all engines  
![AllEngines](https://cloud.githubusercontent.com/assets/19519411/19727326/8c447b90-9b54-11e6-85a0-eeba059d5714.png)    

With only razor engine  
![RazorEngine](https://cloud.githubusercontent.com/assets/19519411/19727327/8c511c74-9b54-11e6-8b96-b4f7234756cc.png)    

### References
12 tips to increase the performance of your ASP.NET application drastically \([http://www.infragistics.com/community/blogs/devtoolsguy/archive/2015/08/07/12-tips-to-increase-the-performance-of-asp-net-application-drastically-part-1.aspx](http://www.infragistics.com/community/blogs/devtoolsguy/archive/2015/08/07/12-tips-to-increase-the-performance-of-asp-net-application-drastically-part-1.aspx)\)    

### Tags
[#tip](../../tips.md)  
[#aspnet](../aspnet.md)  
[#mvc](mvc.md)