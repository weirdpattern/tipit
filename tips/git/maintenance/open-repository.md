## Open the git repository in the browser

### Summary
Lets you open the related git (github/bitbucket/etc) repository using the command line.  
This command only works when the `repository` property has been defined in the `package.json` file.

### Syntax
```bash
npm repo [package_name]
```

|       | Option       | Description                                             |
| :---: | ------------ | -------------------------------------------------------- |
|       | package_name | The name of the package in the npm repository to be open |
   
### Example
```bash
$ cd Repositories
$ git clone https://www.github.com/weirdpattern/my-repository
  Cloning into 'my-repository'...
  warning: You appear to have cloned an empty repository.
  Checking connectivity... done.
  
$ cd my-repository
$ touch package.json
$ vim package.json
  # {
  #   ...
  #   "repository": {
  #     "type": "git"
  #     "url": "https://www.github.com/weirdpattern/my-repository.git"
  #   }
  #   ...
  # }
  #
  # :x! 
$ npm repo
```

### Output
![npm repo](https://cloud.githubusercontent.com/assets/19519411/18207377/a3f71812-70f0-11e6-83a0-658eafa56212.png)

### References
npm-repo \([https://docs.npmjs.com/cli/repo](https://docs.npmjs.com/cli/repo)\)

### Tags
[#tip](../../tips.md)  
[#git](../git.md)  
[#maintenance](maintenance.md)