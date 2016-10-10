## Redirecting the output (and errors) of a command

### Summary
Send output to null, delete output instead of sending it to the console.

### Syntax
```powershell
Out-Null -InputObject <command>
<command> | Out-Null 
<command> > $Null
$Null = <command>
```

|               | Option  | Description                |
| :-----------: | ------- | -------------------------- |
| :exclamation: | command | The command to be executed |

### Examples
```powershell
$ Get-ChildItem 
  Mode                LastWriteTime         Length Name
  ----                -------------         ------ ----
  da----        5/31/2016   4:04 AM                Background
  d-----        5/31/2016   1:48 AM                DRIVERS
  d-----         9/7/2016  11:00 PM                inetpub
  d-----        5/31/2016   2:18 AM                Intel
  d-----        7/13/2009  10:20 PM                PerfLogs
  d-r---        9/23/2016  12:34 PM                Program Files
  d-r---        9/27/2016   3:30 PM                Program Files (x86)
  d-----         9/8/2016   2:12 AM                Publish
  d-----         9/7/2016   1:40 PM                ReceiverLogs
  d-----        9/26/2016   1:41 PM                setup
  d-----         9/9/2016   2:40 PM                TFS
  d-r---        9/14/2016  12:31 PM                Users
  d-----        9/28/2016   3:19 PM                Windows
  -a----         9/7/2016   1:40 PM          24836 config.xml
  -a----        9/23/2005  12:39 AM         894976 msdia80.dll

$ Out-Null -InputObject Get-ChildItem
$ Get-ChildItem | Out-Null
$ Get-ChildItem > $Null
$ $Null = Get-ChildItem
```

### output
![Out-Null](https://cloud.githubusercontent.com/assets/19519411/18956041/87f36e6a-861f-11e6-8e3b-0f265e949066.png)

### References
Sending Data to Null \([https://learn-powershell.net/2014/09/13/quick-hits-sending-data-to-null/](https://learn-powershell.net/2014/09/13/quick-hits-sending-data-to-null/)\)

### Tags
[#tip](../../tips.md)  
[#powershell](../powershell.md)  
[#commands](commands.md)
