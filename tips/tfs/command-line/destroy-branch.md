## Destroy branches

### Summary
Allows the developer to destroy, or permanently delete, version-controlled files from Team Foundation.  

### Syntax
```cmd
tf destroy <item>[;<version>] [/keephistory] [/preview] 
```

|               | Option      | Description                                                                    |
| :-----------: | ----------- | ------------------------------------------------------------------------------ |
| :exclamation: | item        | The path to the folder/file to be destroyed                                    |
|               | version     | The version of the folder/file to be destroyed                                 |
|               | keephistory | Flag indicating the folder/file history should be preserved                    |
|               | preview     | Performs a test run of the command, displaying the folders/files to be deleted |

### Example
```cmd
tf destroy $/My.Company.Project/DevBranch
```

### References
Destroy Command \([https://www.visualstudio.com/en-us/docs/tfvc/destroy-command-team-foundation-version-control](https://www.visualstudio.com/en-us/docs/tfvc/destroy-command-team-foundation-version-control)\)

### Tags
[#tip](../../tips.md)  
[#tfs](../tfs.md)  
[#commandline](command-line.md)