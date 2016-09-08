## Create a new orphan branch

### Summary
Creates a new orphan branch.  
Orphan branches can be used to house your documentation (gh-pages) within a project repository while keeping it from polluting the actual code branch.   
They can also be used to decouple existing code in a repository, moving it to an independent branch for components and controls.   

### Syntax
```bash
git checkout --orphan <branch> [start_point] 
```
    
|               | Option      | Description                                             |
| :-----------: | ----------- | ------------------------------------------------------- |
|               | orphan      | Flag that indicates a new orphan branch must be created |
| :exclamation: | branch      | The name of the new branch to be created                |
|               | start_point | The name of a commit at which to start the new branch   |
   
### Example
```bash
$ cd my-repository

# Notice the presence of a previous commit
$ git log --pretty='%h - %an, %ar : %s'
  f93675a - weirdpattern, 2 minutes ago : Adding package.json

# Create the new orphan branch
$ git checkout --orphan gh-pages
  Switched to a new branch 'gh-pages'

# No previous commit, orphan has no root
$ git log --pretty='%h - %an, %ar : %s'
  fatal: your current branch 'gh-pages' does not have any commits yet
  
# Go back to master  
$ git checkout master
  Switched to branch 'master'
  Your branch is up-to-date with 'origin/master'.

# Create a new branch (regular this time)  
$ git checkout -b new-branch
  Switched to a new branch 'new-branch'
  
# Same previous commits as master
$ git log --pretty='%h - %an, %ar : %s'
  f93675a - weirdpattern, 4 minutes ago : Adding package.json  
```

### Outputs
![Orphan branches](https://cloud.githubusercontent.com/assets/19519411/18356229/85dc91b6-75b1-11e6-8a39-e684d5017a8d.png)

### References
checkout(1) Manual Page \([https://git-scm.com/docs/git-checkout/1.7.3.1](https://git-scm.com/docs/git-checkout/1.7.3.1)\)  

### Tags
[#tip](../../tips.md)  
[#git](../git.md)  
[#branches](branches.md)  
