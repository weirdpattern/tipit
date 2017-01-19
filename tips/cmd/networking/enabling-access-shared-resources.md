## Enabling access to shared resources

### Summary
Connects a computer to or disconnects a computer from a shared resource, or displays information about computer connections.

### Syntax
```batch
net use <shared_resource> [password] [/user:domain\username] [/persistent:[yes|no]]
```

|               | Option          | Description                                                                  |
| :-----------: | --------------- | ---------------------------------------------------------------------------- |
| :exclamation: | shared_resource | A UNC path to a shared resource (can include drives)                         |
|               | password        | The password of the account we want to use to connect to the shared resource |
|               | domain          | The domain of the account we want to use to connect to the shared resource   |
|               | username        | The username of the account we want to use to connect to the shared resource |

### Examples
```batch
$ net use \\WEBAPPT01\c$\inetpub\wwwroot\MyApp\ MyPassword /user:local\ptrevino /persistent:no
```

### References
Net use \([https://technet.microsoft.com/en-us/library/bb490717.aspx](https://technet.microsoft.com/en-us/library/bb490717.aspx)\)  

### Tags
[#tip](../../tips.md)  
[#cmd](../cmd.md)  
[#networking](networking.md)
