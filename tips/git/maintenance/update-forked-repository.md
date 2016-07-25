## Update a forked repository with upstream data

### Summary
Lets you keep your fork and the remote repository in sync.

### Steps
- Open a terminal.

- Browse to your forked repository.
```bash
$ cd my-repository.git
```

- Add an alias to the remote repository.
```bash
$ git remote add upstream https://githost.org/myuser/my-repository.git
```

- Fetch the latest changes from the remote repository.
```bash
$ git fetch upstream
```

- If not done already, checkout your branch (master/other).
```bash
$ git checkout master
```

- Merge/Rebase the remote repository and your local branch.
```bash
# Rebase using
$ git rebase upstream/master

# Merge using
$ git merge upstream/master
```

- Fix any conflict you may have.

- Commit and push
```bash
$ git commit -m "Updating fork"
$ git push origin/master
```

### Example
```bash
$ cd my-repository.git
$ git remote add upstream https://githost.org/myuser/my-repository.git
$ git fetch upstream
$ git checkout master

$ git rebase upstream/master
or 
$ git merge upstream/master

# fix any merge/rebase issues
 
$ git commit -m "Updating fork"
$ git push origin/master
```

### References
How do I update a GitHub forked repository? \([Stack Overflow](http://stackoverflow.com/questions/7244321/how-do-i-update-a-github-forked-repository/7244456#7244456)\)

### Tags
[#tip](../../tips.md)  
[#git](../git.md)  
[#maintenance](maintenance.md)