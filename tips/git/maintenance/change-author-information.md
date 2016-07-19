## Change author information recorded in existing commits

### Summary
Updates the author information (username and email address) recorded in existing commits.

### Steps
- Open a Terminal.
  
- Create a fresh, BARE clone of your repository.  
```bash
$ git clone --bare https://github.com/user/my-repository.git
$ cd my-repository.git
```

- Run script [change-author.sh](resources/change-author.sh), don't forget to update the author information.  
```bash
$ bash [#change-author.sh] "old_email@company.com" "corrected name" "corrected_email@company.com"
```

- Review the new Git history for errors.  
```bash
$ git log
```

- Push the corrected history to GitHub.  
```bash
$ git push --force --tags origin \'refs/heads/*\'
```

- Remove the temporary clone.  
```bash
$ cd ..
$ rm -rf my-repository.git
```
   
### Example
```bash
$ cd ~
$ mkdir temp
$ cd temp
$ git clone --bare https://github.com/user/my-repository.git
$ cd my-repository.git
$ cp ~/Downloads/change-author.sh .
$ bash change-author.sh "old_email@company.com" "corrected name" "corrected_email@company.com"
$ git log
  commit  f10970a2c39da30b163698c61887c1c7cb7ce496
  Author: weirdpattern <patricio@weirdpattern.com>
  Date:   Mon Jun 6 15:56:27 2016 -0500

          Updating version and library

$ git push --force --tags origin 'refs/heads/*'
$ cd ..
$ rm -rf my-repository.git
$ cd ..
$ rm -rf temp
```

### Resources
[1] [change-author.sh](resources/change-author.sh)

### References
Change author information \([https://help.github.com/articles/changing-author-info](https://help.github.com/articles/changing-author-info)\)

### Tags
[#tip](../../tips.md)  
[#git](../git.md)  
[#maintenance](maintenance.md)