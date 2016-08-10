## Push a change without disrupting everyone else's work 

### Summary
Git's push --force is destructive because it unconditionally overwrites the remote repository with whatever you have locally, possibly overwriting any changes that a team member has pushed in the meantime. However there is a better way; the option --force-with-lease can help when you do need to do a forced push but still ensure you don't overwrite other's work.  

--force-with-lease effectively only allows you to force-push if no-one else has pushed changes up to the remote in the interim.

### Syntax
```bash
git push --force-with-lease
```
  
### Example
```bash
# two people working on the same branch in the following sequence

## person A
git checkout my-awesome-feature
git pull --rebase origin

# works on this branch

## person B
git checkout my-awesome-feature
git pull origin

# works on this branch an pushes a new commit
git add .
git commit -m 'Add some cool functionality'
git push origin my-awesome-feature

## person A 
# finishes working on this branch and is ready to push
git add .
git commit -m 'Add my own cool functionality unknowingly overriding person B commit'
git push origin my-awesome-feature
  To /tmp/repo
   ! [rejected]        my-awesome-feature -> my-awesome-feature (fetch first)

# at this point person A has to do a pull (fetch/merge), but instead decides to force a push
git push --force origin my-awesome-feature
  To /tmp/repo
   + f82f59e...c27aff1 my-awesome-feature -> my-awesome-feature (forced update)

# bye bye person B commit =(

# but instead, person A plays it safe and does a --force-with-lease
git push --force-with-lease origin my-awesome-feature
  To /tmp/repo
   ! [rejected]        my-awesome-feature -> my-awesome-feature (fetch first)
   
# now person A knows for sure a pull is required
git pull origin

# merges
git push origin my-awesome-feature

# everybody's happy now =)
```

### References
--force considered harmful; understanding git's --force-with-lease \([https://developer.atlassian.com/blog/2015/04/force-with-lease/](https://developer.atlassian.com/blog/2015/04/force-with-lease/)\)  
git push --force-with-lease \([https://metabroadcast.com/blog/force-with-lease](https://metabroadcast.com/blog/force-with-lease)\)

### Tags
[#tip](../../tips.md)  
[#git](../git.md)  
[#maintenance](maintenance.md)  
