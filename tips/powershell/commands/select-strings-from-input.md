## Select strings from an input

### Summary
Allows the developer to find target text within a file or a variable value.  
You can think of this as the PowerShell version of the `grep` command.  

### Syntax
```powershell
Select-String { -InputObject <object> | -Path <path> } [-Pattern] string[]
```

|               | Option | Description                          |
| :-----------: | ------ | ------------------------------------ |
| :exclamation: | object | The object to be used as input       |
| :exclamation: | path   | A path to a file to be used as input |

### Examples
```powershell
$ cd my-repository

$ "failed" >> "test.txt"
$ "succeded" >> "test.txt"
$ "failed" >> "test.txt"
$ "failed" >> "test.txt"
$ "postponed" >> "test.txt"

$ Select-String -Path "test.txt" -Pattern "failed"
  test.txt:1:failed
  test.txt:3:failed
  test.txt:4:failed

$ Select-String -Path "test.txt" -Pattern "succeded"
  test.txt:2:succeded

$ Select-String -Path "test.txt" -Pattern "failed" -NotMatch 
  test.txt:2:succeded
  test.txt:5:postponed
```

### Output
![Select-String](https://cloud.githubusercontent.com/assets/19519411/19272034/a7823ba0-8f8c-11e6-92b4-7675319c6683.png)

### References
Select-String \([http://ss64.com/ps/select-string.html](http://ss64.com/ps/select-string.html)\)

### Tags
[#tip](../../tips.md)  
[#powershell](../powershell.md)  
[#commands](commands.md)