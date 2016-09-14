## Include a file in current script

### Summary
Allows the developer to spread the logic in different files, including only those that are required for a specific functionality.

### Syntax
```bash
source <file>

# or

. <file>
```

|               | Option | Description             |
| :-----------: | ------ | ----------------------- |
| :exclamation: | file   | The file to be included |

### Example
```bash
if [ -f ~/.bash_profile ]; then
   source ~/.bash_profile
fi

# or simply

if [ -f ~/.bash_profile ]; then
   . ~/.bash_profile
fi
```

### References
Sourcing a File \([http://www.tldp.org/HOWTO/Bash-Prompt-HOWTO/x237.html](http://www.tldp.org/HOWTO/Bash-Prompt-HOWTO/x237.html)\)

### Tags
[#tip](../../tips.md)  
[#bash](../bash.md)  
[#commands](commands.md)