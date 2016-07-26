## Delete a branch

### Summary
Deletes a local or remote branch.  

### Syntax
- Local branches
```bash
git branch -d <branch>

# alternatively use the forced syntax
git branch -D <branch>
```
    
|               | Option | Description                                             |
| :-----------: | ------ | ------------------------------------------------------- |
|               | -d     | Flag that indicates the branch must be deleted          |
|               | -D     | Flag that indicates the branch must be forcibly deleted |
| :exclamation: | branch | The name of the branch to be deleted                    |
   
- Remote branches
```bash
git branch -dr origin/<branch>

# alternatively use the forced syntax
git branch -Dr origin/<branch>
```   

|               | Option | Description                                             |
| :-----------: | ------ | ------------------------------------------------------- |
|               | -d     | Flag that indicates the branch must be deleted          |
|               | -D     | Flag that indicates the branch must be forcibly deleted |
|               | -r     | Flag that indicates the remote branch must be deleted   |
| :exclamation: | branch | The name of the branch to be deleted                    |

<sub>* The list of options is not extensive, for more options please review the references.</sub>
  
### Example
```bash
# local branches
git branch -d bug:123

# remote branches
git branch -dr origin/bug:123
```

### References
How can I delete branches in Git? \([https://www.git-tower.com/learn/git/faq/delete-remote-branch](https://www.git-tower.com/learn/git/faq/delete-remote-branch)\)
Git branch \([https://git-scm.com/docs/git-branch](https://git-scm.com/docs/git-branch)\)  

### Tags
[#tip](../../tips.md)  
[#git](../git.md)  
[#branches](branches.md)  
