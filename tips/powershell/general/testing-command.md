## Testing a command before executing it

### Summary
Allows the developer to test a command without actually executing it.  
This is useful when you want to test the command without any side effects.

### Syntax
```powershell
<command> -WhatIf
```

### Examples
```powershell
$ cd my-repository
$ Remove-Item .git -Recurse -Force -WhatIf
  What if: Performing operation "Remove Directory" on Target "C:\users\tmhpxt22\Repositories\remote\github\my-repository\.git".

$ Get-ChildItem .git
  Directory: C:\users\tmhpxt22\Repositories\remote\github\my-repository\.git

  Mode                LastWriteTime     Length Name
  ----                -------------     ------ ----
  d----         9/21/2016  10:56 AM            hooks
  d----         9/21/2016  10:56 AM            info
  d----         9/21/2016  10:56 AM            logs
  d----         9/21/2016  10:56 AM            objects
  d----         9/21/2016  10:56 AM            refs
  -a---         9/21/2016  10:56 AM        312 config
  -a---         9/21/2016  10:56 AM         73 description
  -a---         9/21/2016  10:56 AM         23 HEAD
  -a---         9/21/2016  10:56 AM        145 index
  -a---         9/21/2016  10:56 AM        107 packed-refs
```

### Output
![WhatIf](https://cloud.githubusercontent.com/assets/19519411/18718875/946cd70c-7fea-11e6-9835-994f3802dde3.PNG)

### References
Make a Simple Change to PowerShell to Prevent Accidents \([https://blogs.technet.microsoft.com/heyscriptingguy/2011/11/21/make-a-simple-change-to-powershell-to-prevent-accidents](https://blogs.technet.microsoft.com/heyscriptingguy/2011/11/21/make-a-simple-change-to-powershell-to-prevent-accidents)\)

### Tags
[#tip](../../tips.md)  
[#powershell](../powershell.md)  
[#general](general.md)
