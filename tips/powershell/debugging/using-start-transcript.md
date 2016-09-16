## Keep a log of everything you do in a session

### Summary
Creates a new log file that contains every command the user types and the output associated with that command.  
The logs are stored in the user's profile location. This is useful for audit purposes.

### Syntax
```powershell
Start-Transcript [[-Path <path>] [-Append] [-Force] [-IncludeInvocationHeader] [-NoClobber] [-OutputDirectory <directory>]]

# more commands here

Stop-Transcript 
# alternatively you can exit the console, that will stop the log as well.
```

|       | Option                      | Description                                                                                        |
| :---: | --------------------------- | -------------------------------------------------------------------------------------------------- |
|       | Path <path>                 | Specifies a location to the transcript file                                                        |
|       | Append                      | Indicates that this cmdlet adds the new transcript to the end of an existing file                  |
|       | Force                       | Allows the cmdlet to append the transcript to an existing read-only file                           |
|       | IncludeInvocationHeader     | Indicates that this cmdlet logs the time stamp when commands are run                               |
|       | NoClobber                   | Indicates that this cmdlet will not overwrite of an existing file                                  |
|       | OutputDirectory <directory> | Specifies a specific path and folder in which to save a transcript. Name is automatically assigned |

### Examples
```powershell
$ Start-Transcript
  Transcript started, output file is C:\Users\WeirdPattern\Documents\PowerShell_transcript.20160916082202.txt
  
$ Get-Process -Name *chrome*
  Handles  NPM(K)    PM(K)      WS(K) VM(M)   CPU(s)     Id ProcessName
  -------  ------    -----      ----- -----   ------     -- -----------
      256      54   167920     182404   868     2.00   1720 chrome
      177      20    44984      51760   734     1.68   3428 chrome
      272      48    93164     134112   846     6.04   6324 chrome
     1876      94   128808     192100   525    87.47   7020 chrome
      271      46    81460      96668  1340     8.72   7064 chrome
      170      28     4256       8300    68     0.05   7504 chrome
      258      42    62520      79500   763     0.76   7636 chrome
      192      19    34096      43016   713     3.84   8008 chrome
      330      50    91484      83132   365    46.78   8092 chrome
      290      45    74904     100304   855    12.12   9840 chrome
      265      52   129748     131656  1359     3.17  10924 chrome

$ Stop-Transcript
  Transcript stopped, output file is C:\Users\WeirdPattern\Documents\PowerShell_transcript.20160916082202.txt
```

### Output
![Transcript](https://cloud.githubusercontent.com/assets/19519411/18588336/a48709bc-7beb-11e6-9678-1df5653bbc6d.PNG)
![Output](https://cloud.githubusercontent.com/assets/19519411/18588337/a48a8a88-7beb-11e6-9738-8fd86ce638f7.PNG)

### References
Start-Transcript \([https://technet.microsoft.com/en-us/library/hh849687.aspx](https://technet.microsoft.com/en-us/library/hh849687.aspx)\)

### Tags
[#tip](../../tips.md)  
[#powershell](../powershell.md)  
[#debugging](debugging.md)