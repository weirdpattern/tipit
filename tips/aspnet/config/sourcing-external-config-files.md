## Sourcing external config files

### Summary
Allows the developer to separate configuration into multiple files.  
This reduces the size of the config file and facilitates the location of a specific setting.  

### Syntax
```xml
<element configSource="<path_to_config>" />
```

### Examples
web.config  
```xml
<configuration>
  <connectionStrings configSource="connectionStrings.config" />
  <appSettings configSource="appSettings.config" />
</configuration>
```

connectionStrings.config  
```xml
<connectionStrings>
  <add name="main" connectionString="Server=.;Database=staging;Trusted_Connection=True;" />
</connectionStrings>
```

appSettings.config  
```xml
<appSettings>
  <add key="send.emails.enabled" value="true" />
  <add key="allow.customizations" value="true" />
</appSettings>
```

### References
appSettings Element \([https://msdn.microsoft.com/en-us/library/aa903313(v=vs.71).aspx](https://msdn.microsoft.com/en-us/library/aa903313(v=vs.71).aspx)\)

### Tags
[#tip](../../tips.md)  
[#aspnet](../aspnet.md)  
[#config](config.md)