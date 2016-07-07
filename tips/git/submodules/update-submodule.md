## Update git submodules

### Summary
Updates git submodules in an existing repository.  
The list of submodules is obtained from the .gitmodules file.

### Syntax
```bash
git submodule update --remote [--init] [--recursive] [--rebase | --merge]
```
    
|               | Option                                 | Description                                                                            |
| :-----------: | -------------------------------------- | -------------------------------------------------------------------------------------- |
| :exclamation: | remote                                 | Pull new commits from origin                                                           |
|               | init                                   | Initialize any inner submodules if necessary                                           |
|               | recursive                              | Do this recursively for all submodules                                                 |
|               | rebase<sup>[1](#user-content-n1)</sup> | Rebase the current branch onto the commit recorded in the superproject                 |
|               | merge<sup>[1](#user-content-n1)</sup>  | Merge the commit recorded in the superproject into the current branch of the submodule |
    
<sub>* The list of options is not extensive, for more options please review the references.</sub>
  
### Example
```bash
$> cd my-repository
$> git submodule update --remote --init --recursive
```

### Notes
<a name='n1'></a>\[1\] Use this option only if you have worked directly on the submodule (not recommended)

### References
Git submodule \([https://git-scm.com/docs/git-submodule](https://git-scm.com/docs/git-submodule)\)

### Tags
[#tip](../../tips.md)  
[#git](../git.md)  
[#submodules](submodules.md)  
