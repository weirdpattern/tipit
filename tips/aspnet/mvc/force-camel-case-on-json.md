## Force camel-case on JSON returned values

### Summary
Tells ASPNET MVC to return camel-cased json values from WEB API calls.  

### Syntax
ASPNET MVC 4 and below
```csharp
// Global.asax 
public void Application_Start()
{
    GlobalConfiguration.Configuration
                       .Formatters
                       .JsonFormatter
                       .SerializerSettings
                       .ContractResolver = new CamelCasePropertyNamesContractResolver();
}
```  

ASPNET Core
```csharp
// Startup.cs
public void ConfigureServices(IServiceCollection services) 
{
    services.AddMvc().AddJsonOptions(opt => {
        opt.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
        opt.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
    });
}
```  

### References  
Serialization using ContractResolver \([http://www.newtonsoft.com/json/help/html/contractresolver.htm](http://www.newtonsoft.com/json/help/html/contractresolver.htm)\)  
Configure Camel Case Resolver for ASP.NET Core MVC \([http://www.hossambarakat.net/2016/05/08/configure-camel-case-resolver-for-asp-net-core-mvc/](http://www.hossambarakat.net/2016/05/08/configure-camel-case-resolver-for-asp-net-core-mvc/)\)  

### Tags  
[#tip](../../tips.md)  
[#aspnet](../aspnet.md)  
[#mvc](mvc.md)