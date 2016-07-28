## Tracking remote branches

### Summary
Allows the developer to create a special relationship between his/her local branch and the remote branch, simplifying operations like pushing and pulling.  

### Syntax
- Working on an existing remote branch in a new local branch
```bash
$ git checkout -t <upstream>

# alternatively use the extended syntax
$ git checkout --track <upstream>
```
    
|               | Option     | Description                                      |
| :-----------: | ---------- | ------------------------------------------------ |
|               | -t/--track | A flag that indicates the branch must be tracked |
| :exclamation: | upstream   | The name of the remote branch to be tracked      |  
  
- Working on an existing remote branch in an existing local branch
```bash
$ git branch -u <upstream>

# alternatively use the extended syntax
$ git branch --set-upstream-to=<upstream>
```
    
|               | Option               | Description                                                                                                     |
| :-----------: | -------------------- | --------------------------------------------------------------------------------------------------------------- |
|               | -u/--set-upstream-to | Sets the branch tracking information so origin/<branch> (a.k.a upstream) is considered <branch> upstream branch |
| :exclamation: | upstream             | The name of the remote branch to be tracked                                                                     |
  
- Pushing a local branch to the remote repository
```bash
$ git push -u <upstream>

# alternatively use the extended syntax
$ git push --set-upstream <upstream>
```
    
|               | Option            | Description                                                                                                     |
| :-----------: | ----------------- | --------------------------------------------------------------------------------------------------------------- |
|               | -u/--set-upstream | Sets the branch tracking information so origin/<branch> (a.k.a upstream) is considered <branch> upstream branch |
| :exclamation: | upstream          | The name of the remote branch to be tracked                                                                     |
   
<sub>* The list of options is not extensive, for more options please review the references.</sub>
  
### Example
```bash
# existing remote branch in a new local branch
$ git checkout -t bug:123

# existing remote branch in an existing local branch
$ git checkout bug:123
$ git branch -u origin/bug:123

# pushing a local branch to remote
$ git checkout bug:123
$ git push -u origin/bug:123
```

### References
How do you track a remote branch? \([https://www.git-tower.com/learn/git/faq/track-remote-upstream-branch](https://www.git-tower.com/learn/git/faq/track-remote-upstream-branch)\)  
Git push \([https://git-scm.com/docs/git-push](https://git-scm.com/docs/git-push)\)  
Git branch \([https://git-scm.com/docs/git-branch](https://git-scm.com/docs/git-branch)\)  
Git checkout \([https://git-scm.com/docs/git-checkout](https://git-scm.com/docs/git-checkout)\)  


### Tags
[#tip](../../tips.md)  
[#git](../git.md)  
[#branches](branches.md)  
