## Show remote information

### Summary
Allows the developer to obtain information about the remote repositories.   

### Syntax
```bash
git remote show origin
```

### Example
```bash
$ cd my-repository
$ git remote show origin
  remote origin
  Fetch URL: https://github.com/weirdpattern/my-repository
  Push  URL: https://github.com/weirdpattern/my-repository
  HEAD branch: master
  Remote branch:
    master tracked
  Local branch configured for 'git pull':
    master merges with remote master
  Local ref configured for 'git push':
    master pushes to master (up to date)
```

### Output
![Output](https://cloud.githubusercontent.com/assets/19519411/21644480/46d3fcb2-d253-11e6-851a-c14422489d81.png)

### References
Inspecting a Remote \([https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes#Inspecting-a-Remote](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes#Inspecting-a-Remote)\)

### Tags
[#tip](../../tips.md)  
[#git](../git.md)  
[#maintenance](maintenance.md)  