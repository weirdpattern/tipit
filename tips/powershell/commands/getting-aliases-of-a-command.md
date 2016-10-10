## Getting aliases of a command

### Summary
Allows the developer to get all aliases for a specific command or get the real command an alias executes.

### Syntax
```powershell
Get-Alias -Name <alias>
Get-Alias -Definition <command>
```

|               | Option  | Description                 |
| :-----------: | ------- | --------------------------- |
| :exclamation: | alias   | The alias to be inspected   |
| :exclamation: | command | The command to be inspected |

### Examples
```powershell
$ Get-Alias -Name ls
  CommandType     Name                                               Version    Source
  -----------     ----                                               -------    ------
  Alias           ls -> Get-ChildItem

$ Get-Alias -Definition Get-ChildItem
  CommandType     Name                                               Version    Source
  -----------     ----                                               -------    ------
  Alias           dir -> Get-ChildItem
  Alias           gci -> Get-ChildItem
  Alias           ls -> Get-ChildItem
```

### Output
![Aliases](https://cloud.githubusercontent.com/assets/19519411/19237732/044c9b92-8ec4-11e6-8356-1f22ac815f91.png)

### References
Using the Get-Alias Cmdlet \([https://technet.microsoft.com/en-us/library/ee176839.aspx](https://technet.microsoft.com/en-us/library/ee176839.aspx)\)

### Tags
[#tip](../../tips.md)  
[#powershell](../powershell.md)  
[#commands](commands.md)