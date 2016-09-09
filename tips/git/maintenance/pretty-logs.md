## Printing pretty git logs

### Summary
Allows the developer to get a more human readable log from a branch.
 
### Syntax
```bash
git log --pretty=format:<format_options>
```

|               | Option         | Description                                              |
| :-----------: | -------------- | -------------------------------------------------------- |
| :exclamation: | format_options | The name of the package in the npm repository to be open |

Where the valid format options include:

| Option | Description                                     |
| :----: | ----------------------------------------------- |
| %H     | Commit hash                                     |
| %h     | Abbreviated commit hash                         |
| %T     | Tree hash                                       |
| %t     | Abbreviated tree hash                           |
| %P     | Parent hashes                                   |
| %p     | Abbreviated parent hashes                       |
| %an    | Author name                                     |
| %ae    | Author email                                    |
| %ad    | Author date (format respects the --date=option) |
| %ar    | Author date, relative                           |
| %cn    | Committer name                                  |
| %ce    | Committer email                                 |
| %cd    | Committer date                                  |
| %cr    | Committer date, relative                        |
| %s     | Subject                                         |
 
### Examples
```bash
$ cd my-repository
$ git log --pretty=format:'%h by %an <%ae> on %cd : %s'
  f93675a by weirdpattern <patricio@weirdpattern.com> on Thu Sep 8 10:41:22 2016 -0500 : Adding package.json
``` 

### Output
![Git log](https://cloud.githubusercontent.com/assets/19519411/18356905/601d00e8-75b4-11e6-9e77-f95f4d914a29.png)

### References
Git Basics - Viewing the Commit History \([https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History)\)

### Tags
[#tip](../../tips.md)  
[#git](../git.md)  
[#maintenance](maintenance.md)