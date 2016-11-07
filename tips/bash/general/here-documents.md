## Using here documents

### Summary 
Allows the developer to write code blocks that use a form of I/O redirection to feed a command list (whatever is inside the delimiters) to an interactive program or a command (ftp, cat, tee, tr, mail, etc).  

### Syntax  
```bash
<command> <<[-] <delimiter>
## command list or plain text
<delimiter>
```  

|               | Option     | Description                                                         |
| :-----------: | ---------- | ------------------------------------------------------------------- |
| :exclamation: | command    | The interactive command to be used to output the feed               |
| :exclamation: | delimiter  | Any combination of characters that will be used to delimit the feed |  

### Examples
```bash
## print a program usage
function usage {
  cat <<- EOB
    Usage:
      update option

      where option can be:
      all      - updates all application managers
      brew     - updates brew application manager
      npm|node - updates npm application manager
  EOB;
  exit
}  

## send an email
email -s 'Backup status' john.smith@company.com <<- EOM
  The backup job finished successfully on ${date} 
EOM;
```  

### References  
Here Documents /([http://www.tldp.org/LDP/abs/html/here-docs.html](http://www.tldp.org/LDP/abs/html/here-docs.html)/)  

### Tags  
[#tip](../../tips.md)  
[#bash](../bash.md)  
[#general](general.md)