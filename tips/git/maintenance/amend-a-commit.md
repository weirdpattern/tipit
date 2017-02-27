## Amend a commit

### Summary
Allows the developer to make changes to an existing repository without having to create a new commit.

### Syntax
```bash
git commit --amend [--no-edit] [-m <message>]
```

|               | Option  | Description                   |
| :-----------: | ------- | ----------------------------- |
| :exclamation: | message | The new message of the commit |

### Example
```bash
# amend the message of the last commit
$ git commit --amend -m "New message for the commit"

# amend the commit without changing the message
$ git add .
$ git commit --amend --no-edit
```

### References
git commit \([https://git-scm.com/docs/git-commit](https://git-scm.com/docs/git-commit)\)   

### Tags
[#tip](../../tips.md)  
[#git](../git.md)  
[#maintenance](maintenance.md)  