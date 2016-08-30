## Using the `> /dev/null` sink to protect your code

### Summary
Redirects the stdout/stderr (or both) to the special location /dev/null.  
The /dev/null device is a special file (not a directory) and is typically used for disposing of unwanted output streams of a process, or as a convenient empty file for input streams. This is usually done by redirection.  

### Syntax
```bash
# redirects standard out (stout) to /dev/null
<operation> > /dev/null

# does exactly the same as above
<operation> 1> /dev/null

# redirects standard error (sterr) to /dev/null
<operation> 2> /dev/null

# redirects standard out (stdout) to /dev/null
# then redirects standard error (sterr) to standard out (stdout).
<operation> > /dev/null 2>&1   

# same as above, but shorter
<operation> &> /dev/null
```

|               | Option    | Description                   |
| :-----------: | --------- | ----------------------------- |
| :exclamation: | operation | The operation to be protected |

### Examples
```bash
$ echo 'hello'
  hello
  
$ echo 'hello' 2> /dev/null
  hello
  
$ echo 'hello' 1> /dev/null
  # no output 
  
$ echo 'hello' &> /dev/null
  # no output
    
$ unlink unexisting-file.sh 
  unlink: unexisting-file.sh: No such file or directory
  
$ unlink unexisting-file.sh 2> /dev/null
  # no output

$ unlink unexisting-file.sh &> /dev/null
  # no output  
```

### Output
![Output echo](https://cloud.githubusercontent.com/assets/19519411/18073282/57420572-6e2a-11e6-8a37-847c12380399.png)
![Output unlink](https://cloud.githubusercontent.com/assets/19519411/18073281/5741a2f8-6e2a-11e6-8568-b94d8e9b3b83.png)

### References
Null device \([https://en.wikipedia.org/wiki/Null_device](https://en.wikipedia.org/wiki/Null_device)\)

### Tags
[#tip](../../tips.md)  
[#bash](../bash.md)  
[#general](general.md)