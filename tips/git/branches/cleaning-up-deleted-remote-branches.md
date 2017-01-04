## Cleaning up deleted remote branches

### Summary
Allows the developer to remove local branches that are tracking already deleted remote branches.

### Syntax
```bash
git remote prune origin [--dry-run]
```

|               | Option  | Description                                         |
| :-----------: | ------- | --------------------------------------------------- |
|               | dry-run | Indicates the prune operation should be only a test |

```bash
$ git remote show origin
  Fetch URL: https://github.com/weirdpattern/eslint-plugin-typescript
  Push  URL: https://github.com/weirdpattern/eslint-plugin-typescript
  HEAD branch: master
  Remote branches:
    master                                              tracked
    refs/remotes/origin/no-angle-bracket-type-assertion stale (use 'git remote prune' to remove)
    restrict-plus-operands                              tracked
    type-annotation-spacing-tests                       tracked
  Local branch configured for 'git pull':
    master merges with remote master
  Local ref configured for 'git push':
    master pushes to master (up to date)

$ git remote prune origin --dry-run
  Pruning origin
  URL: https://github.com/weirdpattern/eslint-plugin-typescript
   * [would prune] origin/no-angle-bracket-type-assertion

$ git remote prune origin
  Pruning origin
  URL: https://github.com/weirdpattern/eslint-plugin-typescript
   * [pruned] origin/no-angle-bracket-type-assertion

$ git remote show origin
  Fetch URL: https://github.com/weirdpattern/eslint-plugin-typescript
  Push  URL: https://github.com/weirdpattern/eslint-plugin-typescript
  HEAD branch: master
  Remote branches:
    master                        tracked
    restrict-plus-operands        tracked
    type-annotation-spacing-tests tracked
  Local branch configured for 'git pull':
    master merges with remote master
  Local ref configured for 'git push':
    master pushes to master (up to date)
```

### Output
![Pruning](https://cloud.githubusercontent.com/assets/19519411/21611255/9e191358-d191-11e6-8015-dc62690718ef.png)

### References
Pruning stale remote-tracking branches \([https://kparal.wordpress.com/2011/04/15/git-tip-of-the-day-pruning-stale-remote-tracking-branches/](https://kparal.wordpress.com/2011/04/15/git-tip-of-the-day-pruning-stale-remote-tracking-branches/)\)

### Tags
[#tip](../../tips.md)  
[#git](../git.md)  
[#branches](branches.md)  