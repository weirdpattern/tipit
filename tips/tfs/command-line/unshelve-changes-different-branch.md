## Unshelve changes to a different branch

### Summary
Allows the developer to unshelve changes in a branch different from the one they were created in.  

### Syntax
```cmd
tfpt unshelve /migrate /source:<source> /target:<target> <shelveset_name>
```

|               | Option         | Description                                        |
| :-----------: | -------------- | -------------------------------------------------- |
| :exclamation: | source         | The path of the branch that contains the shelveset |
| :exclamation: | target         | The path of the branch where we want to unshelve   |
| :exclamation: | shelveset_name | The name of the shelveset we want to unshelve      |

<sub>Note: this requires Team Foundation Power Tools!</sub>

### Example
```cmd
tfpt unshelve /migrate /source:$/My.Company.Project/DevBranch /target:$/My.Company.Project/AnotherBranch "My Awesome Shelveset"
```

### References
Move Shelveset to a Different Branch in TFS \([http://benjii.me/2014/04/move-shelveset-to-different-branch-in-tfs/](http://benjii.me/2014/04/move-shelveset-to-different-branch-in-tfs/)\)

### Tags
[#tip](../../tips.md)  
[#tfs](../tfs.md)  
[#commandline](command-line.md)