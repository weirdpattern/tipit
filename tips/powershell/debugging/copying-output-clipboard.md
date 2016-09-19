## Copying the output to clipboard

### Summary
Allows the developer to copy the output of a specific command to clipboard.

### Syntax
```powershell
<command> | clip
```

### Examples
```powershell
$ Get-Process -Name *chrome*
  Handles  NPM(K)    PM(K)      WS(K) VM(M)   CPU(s)     Id ProcessName                                                  
  -------  ------    -----      ----- -----   ------     -- -----------                                                  
      297      47    66352      71180   306    11.72   1540 chrome                                                       
      264      45    91108      95276  1806     1.37   6016 chrome                                                       
      282      55   143648     160444  1439     9.38   6644 chrome                                                       
     1406      81    89128     140440   412    22.12   7624 chrome                                                       
      158      28     4164       8268    68     0.03   7920 chrome                                                       
      226      38    35108      44676   724     0.97   8520 chrome                                                       
      222      39    45676      52692   737     0.69   8540 chrome                                                       
      281      49    92368     147868   869    12.57  10564 chrome    
	  
$ Get-Process -Name *chrome* | clip
```

### Output
![Clip](https://cloud.githubusercontent.com/assets/19519411/18633182/9c5bc564-7e40-11e6-834b-185e74112b6b.PNG)

### References
PowerTip: Send Output to Clipboard with PowerShell \([https://blogs.technet.microsoft.com/heyscriptingguy/2014/06/15/powertip-send-output-to-clipboard-with-powershell](https://blogs.technet.microsoft.com/heyscriptingguy/2014/06/15/powertip-send-output-to-clipboard-with-powershell)\)

### Tags
[#tip](../../tips.md)  
[#powershell](../powershell.md)  
[#debugging](debugging.md)
	