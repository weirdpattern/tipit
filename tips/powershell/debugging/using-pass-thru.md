## Using `-PassThru` to get an output from a cmdlet

### Summary
Allows the developer to request output from cmdlets that return no output by default.  
It's used most often to verify that the cmdlet did what you intended.

### Syntax
```powershell
<command> -PassThru
```

### Examples
```powershell
$ cd my-repository
$ New-Item -ItemType directory -Path .\backup
$ Copy-Item -Path .\output.txt -Destination .\backup\output.txt

$ Copy-Item -Path .\output.txt -Destination .\backup\output.txt -PassThru
  Directory: C:\Users\TMHPXT22\repositories\remote\github\my-repository\backup
  Mode                LastWriteTime         Length Name
  ----                -------------         ------ ----
  -a----        9/28/2016  11:41 AM              0 output.txt
```

### Output
![PassThru](https://cloud.githubusercontent.com/assets/19519411/18923356/8481648e-8571-11e6-9c22-f4ea7a64fda4.png)

### References
The PassThru Parameter \([https://www.sapien.com/blog/2014/10/06/the-passthru-parameter-gimme-output/](https://www.sapien.com/blog/2014/10/06/the-passthru-parameter-gimme-output/)\)

### Tags
[#tip](../../tips.md)  
[#powershell](../powershell.md)  
[#debugging](debugging.md)