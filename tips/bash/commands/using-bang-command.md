## Using the bang command \(!\)

### Summary
Allows you to not only quickly retrieve several most recent commands, but also reuse parts of the previous command (or any other command within the history), thus making command chaining more easy to implement and even more powerful.

### Syntax
```bash
!<option>[:p]
```

Where option can be one of:   

|       | Option   | Description                                                               |
| :---: | -------- | ------------------------------------------------------------------------- |
|       | !        | Use the last command                                                      |
|       | \[n\]    | Use the n-th unique command in the history                                |
|       | -\[n\]   | Use the command n-th lines back in the history (can be repeated commands) |
|       | \[str\]  | Use the most recent command that starts with the given string             |
|       | ?\[str\] | Use the most recent command that contains the given string                |
|       | :0       | Use the previous command with no arguments                                |
|       | ^        | Use the first word of the previous command                                |
|       | :\[n\]   | Use the n-th word of the previous command                                 |
|       | $        | Use the last word of the previous command                                 |
|       | *        | Use the all words of the previous command                                 |
|       | :p       | Prints the matching command without executing it                          |

<sub>Note: A 'word' is a sequence of characters considered as a single unit by the shell. If you haven’t changed anything, chances are good that a word is a quoted string or a white-space delimited group of characters. A white-space delimited group of characters is a group of characters that are separated from other characters by some form of white-space (tab, space, etc). In this context, a word can be safely understood as an argument.</sub>

### Examples
```bash
$ cd /

# try to create test in /
$ mkdir test
  mkdir: test: Permission denied

# execute the last command adding sudo
$ sudo !!
  sudo mkdir test

# execute the last command replacing test for test2
$ sudo !:1 test2
  sudo mkdir test2  
```

### Output
![Output](https://cloud.githubusercontent.com/assets/19519411/17950249/a30b6520-6a1f-11e6-898e-37db044282b4.png)

### References
Bash Bang \(!\) commands \([http://ss64.com/bash/bang.html](http://ss64.com/bash/bang.html)\)

### Tags
[#tip](../../tips.md)  
[#bash](../bash.md)  
[#commands](commands.md)