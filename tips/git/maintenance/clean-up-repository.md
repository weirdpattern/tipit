## Clean up a repository

### Summary
Allows the developer to rollback all changes, including un-stagged files.

### Syntax
```bash
git clean [-f] [-d] [-x | -X]
```

|       | Option | Description                                                                                       |
| :---: | ------ | ------------------------------------------------------------------------------------------------- |
|       | f      | A flag that indicates the clean operation is going to be forced                                   |
|       | d      | A flag that indicates untracked directories should also be removed                                |
|       | x/X    | A flag that indicates whether ignored files should be removed or not (x to remove, X to preserve) |

### References
git-clean \([https://git-scm.com/docs/git-clean](https://git-scm.com/docs/git-clean)\)

### Tags
[#tip](../../tips.md)  
[#git](../git.md)  
[#maintenance](maintenance.md)  
