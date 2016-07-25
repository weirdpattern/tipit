## Create a new branch

### Summary
Creates a new local or remote branch.  

### Syntax
- Local branches
```bash
git branch <name>   # creates the branch
git checkout <name> # checkouts the branch

# or

git checkout -b <name> # creates and checkouts the branch 
```
    
|               | Option | Description                              |
| :-----------: | ------ | ---------------------------------------- |
| :exclamation: | name   | The name of the new branch to be created |  
   
- Remote branches
```bash
git push origin origin:refs/heads/<name>
```
    
|               | Option | Description                              |
| :-----------: | ------ | ---------------------------------------- |
| :exclamation: | name   | The name of the new branch to be created |
    
<sub>* The list of options is not extensive, for more options please review the references.</sub>
  
### Example
```bash
$ cd my-repository
$ git branch bug:123
$ git checkout bug:123

# or

$ cd my-repository
$ git checkout -b bug:123

# or

$ cd my-repository
$ git push origin origin:refs/heads/bug:123
$ git fetch origin
$ git branch -r
  # origin/master
  # origin/bug:123
$ git checkout bug:123

```

### References
Git branch \([https://git-scm.com/docs/git-branch](https://git-scm.com/docs/git-branch)\)  
Git checkout \([https://git-scm.com/docs/git-checkout](https://git-scm.com/docs/git-checkout)\)

### Tags
[#tip](../../tips.md)  
[#git](../git.md)  
[#branches](branches.md)  
