## Trasnforming your web.config

### Summary
Allows the developer to adjust settings like connection strings, debug options, or any other values that are specific to a particular environment.  

### Syntax
```xml
<element xdt:Transform="<operation>" xdt:Locator="<condition>" />
```

|               | Option    | Description                                                                   |
| :-----------: | --------- | ----------------------------------------------------------------------------- |
| :exclamation: | operation | The type of operation to be performed                                         |
| :exclamation: | condition | The xpath/condition to be used to locate the element that needs to be changed |

<sub>
Operation: Replace, Insert, InsertBefore, InsertAfter, Remove, RemoveAll, RemoveAttributes and SetAttributes.  
Condition: Condition(<XPath>), Match(<attributes>) and XPath(<XPath>).  
</sub>  

### Examples
web.config  
```xml
<configuration>
  <connectionStrings>
    <add name="MyDB" 
         connectionString="DataSource=(local)/SQLServerInstance;Database=MyDatabase;User Id=MyUser;Password=MyPassword;" />
  </connectionStrings>
</configuration>
```

web.dev.config  
```xml
<configuration xmlns:xdt="http://schemas.microsoft.com/XML-Document-Transform">
  <connectionStrings>
    <add name="MyDB" 
         connectionString="DataSource=DevServer/SQLServerInstance;Database=MyDevDatabase;User Id=MyDevUser;Password=MyDevPassword;" 
         xdt:Transform="SetAttributes"
         xdt:Locator="Match(name)" />
  </connectionStrings>
</configuration>
```

web.stage.config  
```xml
<configuration xmlns:xdt="http://schemas.microsoft.com/XML-Document-Transform">
  <connectionStrings>
    <add name="MyDB" 
         connectionString="DataSource=StageServer/SQLServerInstance;Database=MyStageDatabase;User Id=MyStageUser;Password=MyStagePassword;" 
         xdt:Transform="SetAttributes"
         xdt:Locator="Match(name)" />
  </connectionStrings>
</configuration>
```

web.production.config  
```xml
<configuration xmlns:xdt="http://schemas.microsoft.com/XML-Document-Transform">
  <connectionStrings>
    <add name="MyDB" 
         connectionString="DataSource=ProdServer/SQLServerInstance;Database=MyProdDatabase;User Id=MyProdUser;Password=MyProdPassword;" 
         xdt:Transform="SetAttributes"
         xdt:Locator="Match(name)" />
  </connectionStrings>
</configuration>
```

### Output
![Web.config](https://cloud.githubusercontent.com/assets/19519411/19647789/67d3b126-99c5-11e6-9243-e33a6ea90328.png)

### References
Web.config transformation syntax \([https://msdn.microsoft.com/en-us/library/dd465326(v=vs.110).aspx](https://msdn.microsoft.com/en-us/library/dd465326(v=vs.110).aspx)\)  
Transform web.config when deploying a web application \([https://msdn.microsoft.com/en-us/library/dd465318(v=vs.100).aspx](https://msdn.microsoft.com/en-us/library/dd465318(v=vs.100).aspx)\)  

### Tags
[#tip](../../tips.md)  
[#aspnet](../aspnet.md)  
[#config](config.md)