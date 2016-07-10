## Import a repository from another host

### Summary
Lets you import source code from an external repository to a new repository.

### Steps
1. Create a new repository on your host of preference (my-repository.git).  
   <sub>
   Note: each host is different, so this steps will be a bit different for everybody.   
   I use [Github](https://www.github.com) and I find it easier to use the web tools).
   </sub>

2. Open a terminal.  

3. Create a bare clone of the repository you want to import
```bash
$> git clone --bare https://githost.org/myuser/my-repository.git
$> cd my-repository.git
```

3. Push the newly cloned repository using the `--mirror` option.  
```bash
$> git push --mirror https://newhost.org/myuser/my-repository.git
```

4. Clean up the temporary clone.  
```bash
$> cd ..
$> rm -rf my-repository.git
```

5. If you wish to work on it, clone it (no bare option this time).   
```bash
$> git clone https://newhost.org/myuser/my-repository.git
```
   
### Example
```bash
$> cd ~
$> mkdir temp
$> cd temp
$> git clone --bare https://bitbucket.org/user/my-repository.git
$> cd my-repository.git
$> git push --mirror https://github.com/user/my-repository.git
$> cd ..
$> rm -rf my-repository.git
$> cd ..
$> rm -rf temp

# This step is optional (you can do it later too)

$> git clone https://github.com/user/my-repository.git

```

### References
Importing a Git repository using the command line \([https://help.github.com/articles/importing-a-git-repository-using-the-command-line](https://help.github.com/articles/importing-a-git-repository-using-the-command-line)\)

### Tags
[#tip](../../tips.md)  
[#git](../git.md)  
[#maintenance](maintenance.md)