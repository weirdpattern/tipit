## Encrypt or Decrypt sections of the web.config

### Summary
Allows the developer to secure the application web.config most sensitive sections (connectionStrings, appSettings, etc).  

### Steps
- Open a terminal.  

- Navigate to .NET Framework folder  
```powershell
$ cd $env.WINDIR/Microsoft.NET/Framework64/v4.0.30319
```  

- Create a Key Container  
```powershell
$ aspnet_regiis -pc <container> [-size <keySize>][-csp <provider>][-pku][-exp]
```

|               | Option    | Description                                  |
| :-----------: | --------- | -------------------------------------------- |
| :exclamation: | container | The name of the container to be created      |
|               | keySize   | The size of the key                          |
|               | provider  | The container provide to be used (RSA/Dpapi) |
|               | pku       | Makes the container a user level container   |
|               | exp       | Makes the container exportable               |  

- Grant permission to user  
```powershell
$ aspnet_regiis -pa <container> <account> [-csp <provider>][-pku][-full]
```  

|               | Option    | Description                                  |
| :-----------: | --------- | -------------------------------------------- |
| :exclamation: | container | The name of the container to be used         |
| :exclamation: | account   | The account to be granted permissions        |
|               | provider  | The container provide to be used (RSA/Dpapi) |
|               | pku       | Makes the container a user level container   |
|               | full      | gives full access to the key container       |  

- Prepare the web.config 
```xml
<configuration>
  <configProtectedData>
    <providers>
      <add name="<name>" type="System.Configuration.RsaProtectedConfigurationProvider, System.Configuration, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a, processorArchitecture=MSIL" keyContainerName="<container>" useMachineContainer="true" />
    </providers>
  </configProtectedData>
</configuration>
```  

|               | Option    | Description                            |
| :-----------: | --------- | -------------------------------------- |
| :exclamation: | name      | The name of the configuration provider |
| :exclamation: | container | The name of the container to be used   |

- Encrypt a section of the web.config of an application hosted on IIS  
```powershell
$ aspnet_regiis -pe <section> -app <virtualPath> [-location <subPath>] -prov <provider> [-pkm]
```  

|               | Option      | Description                                                          |
| :-----------: | ----------- | -------------------------------------------------------------------- |
| :exclamation: | section     | The section of the web.config to be encrypted                        |
| :exclamation: | virtualPath | The IIS website that hosts the web.config                            |
|               | subPath     | The subpath inside the IIS website that hosts the web.config         |
| :exclamation: | provider    | The name of the provider to be used to encrypt (configProtectedData) |
|               | pkm         | Encrypts the machine config instead of the local config              |

- Encrypt a section of the web.config located in a physical folder  
```powershell
$ aspnet_regiis -pef <section> <path>
```  

|               | Option  | Description                                   |
| :-----------: | ------- | --------------------------------------------- |
| :exclamation: | section | The section of the web.config to be encrypted |
| :exclamation: | path    | The physical path to the web.config file      |

- Decrypt a section of the web.config of an application hosted on IIS  
```powershell
$ aspnet_regiis -pd <section> -app <virtualPath> [-location <subPath>] [-pkm]
```  

|               | Option      | Description                                                          |
| :-----------: | ----------- | -------------------------------------------------------------------- |
| :exclamation: | section     | The section of the web.config to be decrypted                        |
| :exclamation: | virtualPath | The IIS website that hosts the web.config                            |
|               | subPath     | The subpath inside the IIS website that hosts the web.config         |
|               | pkm         | Encrypts the machine config instead of the local config              |

- Decrypt a section of the web.config located in a physical folder  
```powershell
$ aspnet_regiis -pdf <section> <path>
```  

|               | Option  | Description                                   |
| :-----------: | ------- | --------------------------------------------- |
| :exclamation: | section | The section of the web.config to be decrypted |
| :exclamation: | path    | The physical path to the web.config file      |

### Example
```powershell
$ cd $env.WINDIR/Microsoft.NET/Framework64/v4.0.30319
$ aspnet_regiis -pc "MyKeyContainer" -exp
$ aspnet_regiis -pa "MyKeyContainer" "NT AUTHORITY\NETWORK SERVICE"

## in the web.config
## <configuration>
##  <configProtectedData>
##    <providers>
##      <add name="MyProtectedConfigurationProvider" type="System.Configuration.RsaProtectedConfigurationProvider, System.Configuration, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a, processorArchitecture=MSIL" keyContainerName="MyKeyContainer" useMachineContainer="true" />
##    </providers>
##  </configProtectedData>
##</configuration>

## encrypt connection strings
$ aspnet_regiis -pe "connection strings" -app "/Default Website" -prov "MyProtectedConfigurationProvider"

## decrypt connection strings
$ aspnet_regiis -pd "connection strings" -app "/Default Website"
```

### References  
How to: Decrypt a web.config \([https://msdn.microsoft.com/en-us/library/bb986792.aspx](https://msdn.microsoft.com/en-us/library/bb986792.aspx)\)  

### Tags  
[#tip](../../tips.md)  
[#aspnet](../aspnet.md)  
[#config](config.md)