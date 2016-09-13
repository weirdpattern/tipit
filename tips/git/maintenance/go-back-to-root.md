## Go back to the git root directory with `git rev-parse`

### Summary
Go back to the root directory of your repository no matter how deep you are in the tree structure.

### Syntax
```bash
[ ! -z `git rev-parse --show-cdup` ] && cd `git rev-parse --show-cdup`
```

|               | Option    | Description                                                                 |
| :-----------: | --------- | --------------------------------------------------------------------------- |
| :exclamation: | show-cdup | Shows the path of the top-level directory relative to the current directory |

<sub>Note: you can create an alias and add it to your .bash_profile</sub> 

### Examples
```bash
$ cd my-repository
$ cd lib/components/example
$ pwd
  ~/Repositories/my-repository/lib/components/example
$ [ ! -z `git rev-parse --show-cdup` ] && cd `git rev-parse --show-cdup`
$ pwd
  ~/Repositories/my-repository
```

### Output
~[Example](https://cloud.githubusercontent.com/assets/19519411/18457570/8e4aaefc-791f-11e6-8a94-f6ac05ad6045.png)

### References
git-rev-parse \([https://git-scm.com/docs/git-rev-parse](https://git-scm.com/docs/git-rev-parse)\)
  
### Tags
[#tip](../../tips.md)  
[#git](../git.md)  
[#maintenance](maintenance.md)  