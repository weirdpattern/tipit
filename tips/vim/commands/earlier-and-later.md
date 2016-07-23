## Earlier and Later commands

### Summary
Gives you control of the vim history, allowing you to go back and forth between versions of the current document.   
This is great when you delete stuff and then remember you actually need that stuff.

### Syntax
```bash
:ea[rlier] [<count>[(s|m|h|d|f)]]
:lat[er] [<count>[(s|m|h|d|f)]]
```
    
|       | Option | Description                                                                               |
| :---: | ------ | ----------------------------------------------------------------------------------------- |
|       | count  | The total number of times the state must be moved forward or backwards (no count means 1) |
|       | s      | count in seconds                                                                          |
|       | m      | count in minutes                                                                          |
|       | h      | count in hours                                                                            |
|       | d      | count in days                                                                             |
|       | f      | count in file writes (number of save operations)                                          |
  
### Example
```vim
:ea          # go back to the previous state
:earlier     # go back to the previous state
:ea 10s      # go back to what the state was 10 seconds ago
:earlier 10s # go back to what the state was 10 seconds ago
:ea 30m      # go back to what the state was 30 minutes ago
:earlier 30m # go back to what the state was 30 minutes ago
:ea 1h       # go back to what the state was 1 hour ago
:earlier 1h  # go back to what the state was 1 hour ago
:ea 5d       # go back to what the state was 5 days ago
:earlier 5d  # go back to what the state was 5 days ago
:ea 2f       # go back to what the state was 2 saves ago
:earlier 2f  # go back to what the state was 2 saves ago

:lat         # move forward to the next state
:later       # move forward to the next state
:lat 10s     # move forward to what the state will be 10 seconds from now (considering you used a :earlier command before)
:later 10s   # move forward to what the state will be 10 seconds from now (considering you used a :earlier command before)
:lat 30m     # move forward to what the state will be 30 minutes from now (considering you used a :earlier command before)
:later 30m   # move forward to what the state will be 30 minutes from now (considering you used a :earlier command before)
:lat 1h      # move forward to what the state will be 1 hour from now (considering you used a :earlier command before)
:later 1h    # move forward to what the state will be 1 hour from now (considering you used a :earlier command before)
:lat 5d      # move forward to what the state will be 5 days from now (considering you used a :earlier command before)
:later 5d    # move forward to what the state will be 5 days from now (considering you used a :earlier command before)
:lat 2f      # move forward to what the state will be 2 saves from now (considering you used a :earlier command before)
:later 2f    # move forward to what the state will be 2 saves from now (considering you used a :earlier command before)
```

![Earlier and Later](https://cloud.githubusercontent.com/assets/19519411/17079475/1c516446-50d7-11e6-821c-635e90bed9ef.gif)   

### References
Vim documentation: undo \([http://vimdoc.sourceforge.net/htmldoc/undo.html](http://vimdoc.sourceforge.net/htmldoc/undo.html)\)

### Tags
[#tip](../../tips.md)  
[#vim](../vim.md)  
[#commands](commands.md)  
