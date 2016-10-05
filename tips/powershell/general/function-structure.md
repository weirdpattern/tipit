## General function structure

### Summary
Describes the general structure of an advance function in PowerShell.

### Syntax
```powershell
Function <name> {
  [CmdletBinding([options])]
  Param()
  Begin {}
  Process {}
  End {}
}
```

|               | Option        | Description                            |
| :-----------: | ------------- | -------------------------------------- |
| :exclamation: | name          | The name of the function to be created |

Use Param() to declare all parameters the function can receive
Use Begin{} to declare code that must be executed at the beginning of the function. It gets executed once per function call.
Use Process{} to declare code that must be executed per item in the pipeline. Required when ValueFromPipeline or ValueFromPipelineByPropertyName are used.
Use End{} to declare code that must be executed at the end of the function. It gets executed once per function call.

### Examples
```powershell
Function Get-Info {
  [CmdletBinding()]
  Param(
    [Parameter(Mandatory=$True, ValueFromPipeline=$True, ValueFromPipelineByPropertyName=$True)]
	[string[]]$computername,
    [string]$logfile = 'c:\temp\log.txt'
  )
  BEGIN {
    Remove-Item $logfile –erroraction silentlycontinue
  }
  PROCESS {
    Foreach ($computer in $computername) {
	  $continue = $true
      try {
        $os = Get-WmiObject –class Win32_OperatingSystem –computername $computer –erroraction Stop
      } catch {
        $continue = $false
        $computer | Out-File $logfile
      }
      
      if ($continue) {
        $bios = Get-WmiObject –class Win32_BIOS –computername $computer
        $obj = New-Object –typename PSObject
        $obj | Add-Member –membertype NoteProperty –name ComputerName –value ($computer)          –passthru |
               Add-Member –membertype NoteProperty –name OSVersion    –value ($os.caption)        –passthru |
               Add-Member –membertype NoteProperty –name OSBuild      -value ($os.buildnumber)    –passthru |
               Add-Member –membertype NoteProperty –name BIOSSerial   –value ($bios.serialnumber) –passthru |
               Add-Member –membertype NoteProperty –name SPVersion    –value ($os.servicepackmajorversion)
        Write-Output $obj
      }
    }
  }
}

$ Get-Info -computername SERVER1
  ComputerName : 1SS1WEB_LT35
  OSVersion    : Microsoft Windows 7 Enterprise
  OSBuild      : 7601
  BIOSSerial   : R90HHA76
  SPVersion    : 1

$ 'SERVER1' >> 'names.txt'
$ Get-Content names.txt | Get-Info
  ComputerName : 1SS1WEB_LT35
  OSVersion    : Microsoft Windows 7 Enterprise
  OSBuild      : 7601
  BIOSSerial   : R90HHA76
  SPVersion    : 1
```

### References
Use the Pipeline to Create Robust PowerShell Functions \([https://blogs.technet.microsoft.com/heyscriptingguy/2011/05/10/use-the-pipeline-to-create-robust-powershell-functions](https://blogs.technet.microsoft.com/heyscriptingguy/2011/05/10/use-the-pipeline-to-create-robust-powershell-functions)\)

### Tags
[#tip](../../tips.md)  
[#powershell](../powershell.md)  
[#general](general.md)