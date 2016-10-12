## Getting strings from objects

### Summary
Allows the developer to get a string representation of an object making it easier to apply filters on these objects.

### Syntax
```powershell
Out-String [-InputObject <object>] [-Stream][-Width <int>]
```

|               | Option | Description                                     |
| :-----------: | ------ | ----------------------------------------------- |
| :exclamation: | object | The object to be converted                      |
| :exclamation: | int    | The number of characters in each line to output |

### Examples
```powershell
$ Get-Alias | Select-String -Pattern "Get-Command"
  # get nothing

$ Get-Alias | Out-String | Select-String -Pattern "Get-Command"
  # get the entire list of commands (no filter)

$ Get-Alias | Out-String -Stream | Select-String -Pattern "Get-Command"
  Alias           gcm -> Get-Command

$ Get-Alias | Format-Table -Property * | Out-File C:\aliases.txt
  # get a truncated version of the output
  HelpUri                                       ResolvedCommandName            DisplayName                             Re
                                                                                                                       fe
                                                                                                                       re
                                                                                                                       nc
                                                                                                                       ed
                                                                                                                       Co
                                                                                                                       mm
                                                                                                                       an
                                                                                                                       d 
  -------                                       -------------------            -----------                             --
  http://go.microsoft.com/fwlink/?LinkID=113300 ForEach-Object                 % -> ForEach-Object                     Fo
  http://go.microsoft.com/fwlink/?LinkID=113423 Where-Object                   ? -> Where-Object                       Wh
  http://go.microsoft.com/fwlink/?LinkID=113278 Add-Content                    ac -> Add-Content                       Ad
  http://go.microsoft.com/fwlink/?LinkID=113281 Add-PSSnapin                   asnp -> Add-PSSnapin                    Ad
  http://go.microsoft.com/fwlink/?LinkID=113310 Get-Content                    cat -> Get-Content                      Ge

$ Get-Alias | Format-Table -Property * | Out-String -Width 4096 | Out-File C:\aliases-complete.txt
  # get a complete version of the output
  HelpUri                                       ResolvedCommandName            DisplayName                             ReferencedCommand              ResolvedCommand                Definition                                          
  -------                                       -------------------            -----------                             -----------------              ---------------                ----------
  http://go.microsoft.com/fwlink/?LinkID=113300 ForEach-Object                 % -> ForEach-Object                     ForEach-Object                 ForEach-Object                 ForEach-Object                                             
  http://go.microsoft.com/fwlink/?LinkID=113423 Where-Object                   ? -> Where-Object                       Where-Object                   Where-Object                   Where-Object                                     
  http://go.microsoft.com/fwlink/?LinkID=113278 Add-Content                    ac -> Add-Content                       Add-Content                    Add-Content                    Add-Content                                              
  http://go.microsoft.com/fwlink/?LinkID=113281 Add-PSSnapin                   asnp -> Add-PSSnapin                    Add-PSSnapin                   Add-PSSnapin                   Add-PSSnapIn                                     
  http://go.microsoft.com/fwlink/?LinkID=113310 Get-Content                    cat -> Get-Content                      Get-Content                    Get-Content                    Get-Content  
```

### Output
Command  
![Out-String](https://cloud.githubusercontent.com/assets/19519411/19311722/2641cd3e-9055-11e6-8c4e-0a59c2f47109.png)

Truncated  
![Output Truncated](https://cloud.githubusercontent.com/assets/19519411/19311723/26486054-9055-11e6-9075-eb82ea617d7d.png)

Complete  
![Output Complete](https://cloud.githubusercontent.com/assets/19519411/19311721/26350950-9055-11e6-8415-8c1ee02ce012.png)

### References
Out-String \([https://technet.microsoft.com/en-us/library/hh849952.aspx](https://technet.microsoft.com/en-us/library/hh849952.aspx)\)
Creating wide tables with PowerShell \([https://poshoholic.com/2010/11/11/powershell-quick-tip-creating-wide-tables-with-powershell](https://poshoholic.com/2010/11/11/powershell-quick-tip-creating-wide-tables-with-powershell)\)

### Tags
[#tip](../../tips.md)  
[#powershell](../powershell.md)  
[#commands](commands.md)