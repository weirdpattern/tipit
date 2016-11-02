## Creating aliases for the command prompt

### Summary
Allows the developer to create aliases for specific commands and load them up when the command prompt windows is open.

### Steps
- Open a terminal

- Create an autorun.bat file  
```batch
$ cd %USERPROFILE%
$ mkdir .cmd & cd .cmd
$ echo REM Loads the .cmd_aliases macro file >> autorun.bat
$ echo DOSKEY /macrofile="%USERPROFILE%\.cmd\.cmd_aliases" >> autorun.bat
```

- Create a .cmd_aliases in %USERPROFILE%\.cmd\  
```batch
$ cd %USERPROFILE%
$ cd .cmd
$ REM. > .cmd_aliases 
```

- Add new aliases to .cmd_aliases  
```batch
DOSKEY <alias>=<command>
```

- Wire everything via a HCU reg key
```batch
$ reg add "HKEY_CURRENT_USER\Software\Microsoft\Command Processor" /v "Autorun" /d "%USERPROFILE%\.cmd\autorun.bat"
```

### References
Doskey \([https://technet.microsoft.com/en-us/library/bb490894.aspx](https://technet.microsoft.com/en-us/library/bb490894.aspx)\)

### Tags
[#tip](../../tips.md)  
[#cmd](../cmd.md)  
[#aliases](aliases.md)