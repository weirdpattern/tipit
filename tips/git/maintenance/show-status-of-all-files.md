## Show status of all files in a directory

### Summary
Allows the developer to view all files inside a newly added subdirectory.

### Syntax
```bash
git status [-u[<mode>] | --untracked-files[=<mode>]]
```

|       | Option               | Description                                   |
| :---: | -------------------- | --------------------------------------------- |
|       | u or untracked-files | A flag that tells git to show untracked files |
|       | mode                 | The mode to be used                           |

<sub>
Valid modes are:  
no - show no untracked files.  
normal - shows untracked files and directories.  
all - also shows individual files in untracked directories.  

Rules:  
When -u or --untracked-files is specified without a mode, `all` mode is used.  
When -u or --untracked-files is not specified, `normal` mode is used. 
</sub>

### Example
```bash
$ cd my-repository
$ mkdir new
$ cd new
$ echo 'test' > 'new-file.txt'
$ cd ..
$ git status
  On branch master
  Your branch is up-to-date with 'origin/master'.
  Untracked files:
    (use "git add <file>..." to include in what will be committed)

        new/

  nothing added to commit but untracked files present (use "git add" to track)

$ git status -u
  On branch master
  Your branch is up-to-date with 'origin/master'.
  Untracked files:
    (use "git add <file>..." to include in what will be committed)

        new/new-file.txt

  nothing added to commit but untracked files present (use "git add" to track)

$ git status -uno
  On branch master
  Your branch is up-to-date with 'origin/master'.
  nothing added to commit but untracked files present (use "git add" to track)
$ git status -unormal
  On branch master
  Your branch is up-to-date with 'origin/master'.
  Untracked files:
    (use "git add <file>..." to include in what will be committed)

        new/

  nothing added to commit but untracked files present (use "git add" to track)

$ git status -uall
  On branch master
  Your branch is up-to-date with 'origin/master'.
  Untracked files:
    (use "git add <file>..." to include in what will be committed)

        new/new-file.txt

  nothing added to commit but untracked files present (use "git add" to track)
```

### Output
![GitStatus]()

### References
Get inside untracked directories for status \([https://medium.com/@porteneuve/30-git-cli-options-you-should-know-about-15423e8771df#.6mrauk82t](https://medium.com/@porteneuve/30-git-cli-options-you-should-know-about-15423e8771df#.6mrauk82t)\)    
Git status \([https://git-scm.com/docs/git-status](https://git-scm.com/docs/git-status)\)  

### Tags
[#tip](../../tips.md)  
[#git](../git.md)  
[#maintenance](maintenance.md)  
