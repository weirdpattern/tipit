## Using the brace expansion command \(`{,}`\)

### Summary
A mechanism by which arbitrary strings may be generated. Patterns to be brace-expanded take the form of an optional PREAMBLE, followed by a series of comma-separated strings between a pair of braces, followed by an optional POSTSCRIPT. The preamble is prefixed to each string contained within the braces, and the postscript is then appended to each resulting string, expanding left to right.

### Syntax
```bash
# strings
[preamble] {<option1>,<option2>,[...,<optionN>]} [postscript]

# ranges
{<start>..<end>}
```

|               | Option     | Description                                   |
| :-----------: | ---------- | --------------------------------------------- |
|               | preamble   | In a string, the starting value of the string |
|               | postscript | In a string, the end value of the string      |
| :exclamation: | option[N]  | In a string, the replacement options          |
| :exclamation: | start      | In a range, the start value of the range      |
| :exclamation: | end        | In a range, the end value of the range        |

### Examples
```bash
$ touch myfile.txt
$ cp myfile{,-bkp}.txt
$ ls | grep myfile
  -rw-r--r--     1 WeirdPattern       0 Aug 26 11:55 myfile-bkp.txt
  -rw-r--r--     1 WeirdPattern       0 Aug 26 11:55 myfile.txt
  
$ echo {0..9}
  0 1 2 3 4 5 6 7 8 9
```

### Output
![Output strings](https://cloud.githubusercontent.com/assets/19519411/18013689/e4718ec0-6b84-11e6-82da-537be29ef6a3.png)
![Output range](https://cloud.githubusercontent.com/assets/19519411/18013711/f84642a6-6b84-11e6-8f9f-9fe08ee62992.png)

### References
Brace expansion \([http://wiki.bash-hackers.org/syntax/expansion/brace](http://wiki.bash-hackers.org/syntax/expansion/brace)\)

### Tags
[#tip](../../tips.md)  
[#bash](../bash.md)  
[#commands](commands.md)