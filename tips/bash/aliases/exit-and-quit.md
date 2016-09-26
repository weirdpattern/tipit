## Exit and Quit your terminal

### Summary
Allows the developer to exit and quit the terminal with one simple command.

### Syntax
```bash
export TERMINAL="Terminal" # HyperTerm, iTerm2...
alias quit='/usr/bin/osascript -e "tell application \"$TERMINAL\" to quit";exit'
```

|               | Option    | Description                                                                                       |
| :-----------: | --------- | ------------------------------------------------------------------------------------------------- |
| :exclamation: | $TERMINAL | An environment variable with the name of the terminal you prefer (I export this in .bash_exports) |

### Example
```bash
$ quit 
  # This will exit the terminal process and then close the terminal window (no more ⌘ + Q)
```

### References
Automatically quit Terminal when typing exit \([Stack Overflow](http://apple.stackexchange.com/questions/3066/automatically-quit-terminal-when-typing-exit/15002#15002)\)

### Tags
[#tip](../../tips.md)  
[#bash](../bash.md)  
[#aliases](aliases.md)