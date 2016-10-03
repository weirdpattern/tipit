## Multiple ways to undo changes in git

### Summary
Allows the developer to undo the changes in a specific repository.  
The result will vary depending on the selected options.  

### Syntax
```bash
git reset [--soft | --mixed | --hard | --merge | --keep][commit]
```

|       | Option | Description                                              |
| :---: | ------ | -------------------------------------------------------- |
|       | soft   | Does not touch the index file or the working tree at all (but resets the head to `commit`, just like all modes do). This leaves all your changed files "Changes to be committed", as git status would put it |
|       | mixed  | Resets the index but not the working tree (i.e., the changed files are preserved but not marked for commit) and reports what has not been updated. This is the default action |
|       | hard   | Resets the index and working tree. Any changes to tracked files in the working tree since `commit\ are discarded |
|       | merge  | Resets the index and updates the files in the working tree that are different between `commit` and HEAD, but keeps those which are different between the index and working tree. If a file that is different between <commit> and the index has unstaged changes, reset is aborted |
|       | keep   | Resets index entries and updates files in the working tree that are different between `commit` and HEAD. If a file that is different between `commit` and HEAD has local changes, reset is aborted |
|       | commit | The commit hash to be updated. |

##### Organization

![Git Organization](https://cloud.githubusercontent.com/assets/19519411/19037608/cc3ad822-893c-11e6-9c23-797016882ab8.png)

##### Reset Soft

![Soft](https://cloud.githubusercontent.com/assets/19519411/19037610/cf1b0ad0-893c-11e6-8272-0617b39e8ef2.png)

##### Reset Mixed

![Mixed](https://cloud.githubusercontent.com/assets/19519411/19037612/d06a31ea-893c-11e6-80b0-fcfb71644179.png)

##### Reset Hard

![Hard](https://cloud.githubusercontent.com/assets/19519411/19037613/d18f96f0-893c-11e6-9379-8ebbfb3eab37.png)

### References
Git Reset \([https://git-scm.com/docs/git-reset](https://git-scm.com/docs/git-reset)\)  

### Tags
[#tip](../../tips.md)  
[#git](../git.md)  
[#maintenance](maintenance.md)  
