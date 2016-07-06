## Add git submodules

### Summary
  Adds a new git submodule to an existing repository.  
  The newly created submodules are headless, so if you need to work on them you need to checkout

### Syntax
  ```bash
  git submodule add \<repository\> \[\<path\>\]
  ```  
    
  
  | Required      | Option     | Description                                         |
  | ------------- | -----------| --------------------------------------------------- |
  | :exclamation: | repository | Url to the repository we want to add as a submodule |
  |               | path       | The path where the submodule will be initialized    |   
    
  <sub>* The list of options is not extensive, for more options please review the references.</sub>
  
### Example
  ```bash
  $> cd my-repository
  $> git submodule add https://www.github.com/weirdpattern/alfred-python-workflow library

  # the below step is only required if your submodule has other submodules
  # git only pull the source code of the top level submodule, inner submodules need to be initialized manually

  $> cd library
  $> git submodule init
  ```

#### References
  Git submodule \( [https://git-scm.com/docs/git-submodule](https://git-scm.com/docs/git-submodule) \)

#### Tags
  \#git, \#submodule
