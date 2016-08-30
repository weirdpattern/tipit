## Remove directories even if they are not empty

### Summary
Allows the user to delete a directory, including all of its content.

### Syntax
```bash
rm -r[f] <directory> 
```

|               | Option    | Description                             |
| :-----------: | --------- | --------------------------------------- |
| :exclamation: | r         | Recursive                               |
|               | f         | Force                                   |
|               | directory | Name of the directory you want to delete|

### Example
```bash
$ cd my-git-repository

# attempt to remove the .git directory (not empty)
$ rmdir .git
  rmdir: .git: Directory not empty
  
$ rm -rf .git
  .git/COMMIT_EDITMSG
  ...
  .git/FETCH_HEAD
  ...
  .git/HEAD
  ...
  .git
```

### References
How do I remove a full directory in Linux? \([http://www.computerhope.com/issues/ch000798.htm](http://www.computerhope.com/issues/ch000798.htm)\)

### Tags
[#tip](../../tips.md)  
[#bash](../bash.md)  
[#commands](commands.md)