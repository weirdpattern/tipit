## Rollbacks the last local and remote commit

### Summary
Allows the developer to rollback any changes introduced by mistake.  
Warning: this may cause issues with people who have fetched, pulled or cloned the repository before your rollback. Use it wisely.  

### Steps
- Open a terminal

- Browse to your local repository
```bash
$ cd my-repository.git
```

- Reset your last local commit
```bash
$ git reset HEAD^
``` 

- Push the change back to the remote repository
```bash
$ git push origin +HEAD
```

### Alternate steps
- Open a terminal

- Browse to your local repository
```bash
$ cd my-repository.git
```

- Reset your last remote commit (keep the local commit intact)
```bash
$ git push origin +HEAD^:master # (this can be any other branch you want)
```

### Example
```bash
$ cd my-repository.git
$ git reset HEAD^
$ git push origin +HEAD

# or

$ cd my-repository.git
$ git push origin +HEAD^:master
```

### References
Remove last commit from remote git repository \([Stack Overflow](http://stackoverflow.com/questions/8225125/remove-last-commit-from-remote-git-repository/8225166#8225166)\)  

### Tags
[#tip](../../tips.md)  
[#git](../git.md)  
[#maintenance](maintenance.md)  
