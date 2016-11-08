## Fiddler proxy configuration

### Summary
Allows the developer to redirect asp.net request through fiddler.  

### Syntax
```xml
<!-- 
machine.config 

location:
32bit: %WINDIR%\Microsoft.NET\Framework\[version]\Config
64bit: %WINDIR%\Microsoft.NET\Framework64\[version]\Config 

version:
v1.0.3705
v1.1.4322
v2.0.50727
v4.0.30319
-->
<configuration>
  <system.net>
    <defaultProxy enabled="true">
      <proxy proxyaddress="http://127.0.0.1:8888" />
    </defaultProxy>
  </system.net>
</configuration>
```  

### References  
Capturing traffic from .NET Services with Fiddler \([http://www.telerik.com/blogs/capturing-traffic-from-.net-services-with-fiddler](http://www.telerik.com/blogs/capturing-traffic-from-.net-services-with-fiddler)\)  

### Tags  
[#tip](../../tips.md)  
[#aspnet](../aspnet.md)  
[#config](config.md)