## Using git cherry

### Summary
Allows the developer to find commits yet to be applied to upstream

### Syntax
```bash
git cherry [-v] [[upstream] [[head] [[limit]]]
``` 

|       | Option   | Description                                                                   |
| :---: | -------- | ----------------------------------------------------------------------------- |
|       | v        | Show the commit subjects next to the SHAs.                                    |
|       | upstream | Upstream branch to search for equivalent commits. Defauls to HEAD's upstream. |
|       | head     | Working branch; defaults to HEAD.                                             |
|       | limit    | The last commit we want on the report.                                        |

### Example
```bash
$ git checkout -b topic origin/master

# work and create some commits
$ git commit -m "Adding x feature"
$ git commit -m "Adding y feature"

# update your notion of origin/master
$ git fetch  
$ git cherry -v
  - cccc000... commit C
  + bbbb000... commit B
  - aaaa000... commit A
```

### References
git-cherry \([https://git-scm.com/docs/git-cherry](https://git-scm.com/docs/git-cherry)\)

### Tags
[#tip](../../tips.md)  
[#git](../git.md)  
[#maintenance](maintenance.md)