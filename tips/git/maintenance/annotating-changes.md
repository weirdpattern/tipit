## Annotating changes using git blame

### Summary
Annotates each line in the given file with information from the revision which last modified the line.   

### Syntax
```bash
git blame <file> [options]
```

|               | Option  | Description                                                      |
| :-----------: | ------- | ---------------------------------------------------------------- |
| :exclamation: | file    | The path to the file to be annotated                             |
|               | options | Any extra options to filter or improve readability of the output |

### Examples
```bash
$ cd my-repository
$ git blame package.json
  ^f93675a (weirdpattern 2016-09-08 10:41:22 -0500 1) {
  ^f93675a (weirdpattern 2016-09-08 10:41:22 -0500 2)   "name": "my-repository",
  32fea264 (weirdpattern 2016-12-01 08:00:00 -0600 3)   "author": "patricio trevino <patricio@weirdpattern.com>"
  ^f93675a (weirdpattern 2016-09-08 10:41:22 -0500 4) }
```

### Output
![Output](https://cloud.githubusercontent.com/assets/19519411/20796606/82c85064-b79c-11e6-8ef0-768ef18f74e3.png)

### References
git-blame \([https://git-scm.com/docs/git-blame](https://git-scm.com/docs/git-blame)\)
  
### Tags
[#tip](../../tips.md)  
[#git](../git.md)  
[#maintenance](maintenance.md)  