## Supporting `-WhatIf` and `-Confirm` in a Powershell script

### Summary
Adding `-WhatIf` and `-Confirm` to Powershell scripts prevents human errors by adding a confirmation step to your code and facilitates testing of the scripts.

### Syntax
```powershell
function <function_name> {
  [CmdletBinding(SupportsShouldProcess[=$True])]
  Param() {
    [<params>]
  }

  if ($PSCmdlet.ShouldProcess(<target> [, action])) {
    [conditional_code]
  }
}
```
 
|               | Option           | Description                                                                                                                                            |
| :-----------: | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| :exclamation: | function_name    | The name of the function supporting WhatIf and Confirm scenarios (the function block is optional, this will also work with regular Powershell scripts) |
|               | params           | The paremeter definitions (if any, in which case you still need the Param() declaration, but leave it empty)                                           |
| :exclamation: | target           | he name of the resource to be changed (usually the name of the function implementing the scenerario)                                                   |
|               | action           | A brief message describing the operation to be performed                                                                                               |
|               | conditional_code | The code to be executed                                                                                                                                |

### Examples
```powershell
function Start-AsyncMonitoring {
  [CmdletBinding(SupportsShouldProcess)]
  Param()

  Process {
    if ($PSCmdlet.ShouldProcess("Start-AsyncMonitoring", "Starts monitoring the application asynchonously")) {
      Start-Process (Join-Path $pwd "services\AppMonitor.ps1")
    }     

    # To pass it along to other functions use $WhatIfPreference
    Start-OtherServices -WhatIf:$WhatIfPreference
  }
}
```

### References
ShouldProcess() in Your Script Cmdlets \([http://windowsitpro.com/blog/advanced-functions-part-2-shouldprocess-your-script-cmdlets](http://windowsitpro.com/blog/advanced-functions-part-2-shouldprocess-your-script-cmdlets)\)

### Tags
[#tip](../../tips.md)  
[#powershell](../powershell.md)  
[#debugging](debugging.md)