## Renaming a remote repository

### Summary
Allows the developer to change the name of the remote repository in the local repository.  
This makes things easier to remember if you have trouble with `origin`  

### Syntax
```bash
git remote rename <old_name> <new_name>
```

|               | Option   | Description                               |
| :-----------: | -------- | ----------------------------------------- |
| :exclamation: | old_name | The name of the current remote repository |
| :exclamation: | new_name | The new name of the remote repository     |

### Examples
```bash
$ cd my-repository.git
$ git remote -v
  origin  https://github.com/weirdpattern/my-repository.git (fetch)
  origin  https://github.com/weirdpattern/my-repository.git (push)

$ git remote rename origin destination
$ git remote -v
  destination     https://github.com/weirdpattern/my-repository.git (fetch)
  destination     https://github.com/weirdpattern/my-repository.git (push)
```

### Output
![Rename]()

### References
Renaming a remote \([https://help.github.com/articles/renaming-a-remote/](https://help.github.com/articles/renaming-a-remote/)\)  

### Tags
[#tip](../../tips.md)  
[#git](../git.md)  
[#maintenance](maintenance.md)  
