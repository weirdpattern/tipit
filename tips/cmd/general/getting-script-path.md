## Getting the path of the currently executing script file

### Summary
Allows the developer to get the path of the currently executing script file vs getting the path from where the script was executed.    

### Syntax
```batch
%~dp0
```

### Examples
```batch
:: c:\temp\
::   scripts\
::     script.bat
::     sub-scripts\
::       sub-script.bat

:: ----------------------

:: script.bat
echo off
echo %cd%
echo %~dp0

:: ----------------------

:: sub-script.bat
echo off
echo %cd%
echo %~dp0

:: ----------------------

$ cd c:\temp
$ scripts\script.bat
:: %cd% -> c:\temp
:: %~dp0 -> c:\temp\scripts\

$ scripts\scripts\sub-script.bat
:: %cd% -> c:\temp
:: %~dp0 -> c:\temp\scripts\sub-scripts\

$ cd scripts
$ script.bat
:: %cd% -> c:\temp\scripts
:: %~dp0 -> c:\temp\scripts\

$ scripts\sub-script.bat
:: %cd% -> c:\temp\scripts
:: %~dp0 -> c:\temp\scripts\sub-scripts\

$ cd sub-scripts
$ sub-script.bat
:: %cd% -> c:\temp\scripts\sub-scripts\
:: %~dp0 -> c:\temp\scripts\sub-scripts\
```

### Output
![Paths](https://cloud.githubusercontent.com/assets/19519411/19968616/5539e392-a1a3-11e6-917c-4856da159d76.png)  

### References
The %~dp0 Variable \([https://htipe.wordpress.com/2008/10/09/the-dp0-variable/](https://htipe.wordpress.com/2008/10/09/the-dp0-variable/)\)  

### Tags
[#tip](../../tips.md)  
[#cmd](../cmd.md)  
[#general](general.md)  