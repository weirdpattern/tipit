## Delete a TFS Project

### Summary
Allows the developer to delete a TFS Project from a collection

### Syntax
```cmd
TFSDeleteproject [\q] [\force] [\collection:<collection>] <project>
```

|               | Option      | Description                                                                                   |
| :-----------: | ----------- | --------------------------------------------------------------------------------------------- |
|               | q           | Use quiet mode                                                                                |
|               | force       | Specifies that the deletion process should continue even if some components cannot be deleted |
|               | collection  | The TFS collection hosting the project                                                        |
| :exclamation: | project     | The TFS project name to be deleted                                                            |

### Example
```cmd
TFSDeleteproject \collection:"http://tfs.domain.com/tfs/MyCollection" My.Company.Project
```

### References
Delete a team project with TFSDeleteproject \([https://www.visualstudio.com/en-us/docs/setup-admin/tfs/command-line/tfsdeleteproject-cmd](https://www.visualstudio.com/en-us/docs/setup-admin/tfs/command-line/tfsdeleteproject-cmd)\)

### Tags
[#tip](../../tips.md)  
[#tfs](../tfs.md)  
[#commandline](command-line.md)