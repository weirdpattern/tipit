## Removing http headers in web.config

### Summary
Allows the developer to specify http headers that must be removed from every http request.  

### Syntax
Removes the X-AspNet-Version=x.x.xxxx header
```xml
<system.web>
  <httpRuntime enableVersionHeader="false" />
</system.web>
```  

Removes the X-Powered-By header  
```xml
<system.webServer>
  <httpProtocol>
    <customHeaders>
      <remove name="X-Powered-By" />
    </customHeaders>
  </httpProtocol>
</system.webServer>
```  

In Global.asax (in case you are using MVC)
```c#
MvcHandler.DisableMvcResponseHeader = true;
```

### Examples
```xml
<configuration>
  <system.web>
    <httpRuntime enableVersionHeader="false" />
  </system.web>
  <system.webServer>
    <httpProtocol>
      <customHeaders>
        <remove name="X-Powered-By" />
      </customHeaders>
    </httpProtocol>
  </system.webServer>
</configuration>
```

### Output
Without optimizations  
![Plain](https://cloud.githubusercontent.com/assets/19519411/19687548/64bb3286-9a8b-11e6-9831-3408b02c052f.png)  
![WithHeaders](https://cloud.githubusercontent.com/assets/19519411/19687550/64c34f52-9a8b-11e6-9d65-4f9da4007d55.png)  
  
With optimizations  
![Configured](https://cloud.githubusercontent.com/assets/19519411/19687549/64bf5f3c-9a8b-11e6-82b0-1821786d1b82.png)  
![WithoutHeaders](https://cloud.githubusercontent.com/assets/19519411/19687769/710ba614-9a8c-11e6-85ac-2ba768de483e.png)  

Global.asax  
![Global.asax](https://cloud.githubusercontent.com/assets/19519411/19687743/49aaa76e-9a8c-11e6-8d78-467aba044726.png)

### References
Optimize ASP.NET \([http://optimizeasp.net/web-config-tricks](http://optimizeasp.net/web-config-tricks)\)    

### Tags
[#tip](../../tips.md)  
[#aspnet](../aspnet.md)  
[#config](config.md)