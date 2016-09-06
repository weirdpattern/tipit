## Look for outdated packages

### Summary
Allows the developer to identify those packages that need to be updated.

### Syntax
```bash
npm outdated [package]
```

|       | Option  | Description                             |
| :---: | ------- | --------------------------------------- |
|       | package | The name of the package to be evaluated |

### Examples
```bash
$ cd my-repository
$ npm outdated
  Package  Current  Wanted  Latest  Location
  lodash    4.14.0  4.14.0  4.15.0
```

### Output
![outdated](https://cloud.githubusercontent.com/assets/19519411/18257529/edcc4f88-738a-11e6-8198-768b1f161b48.png)

### References
npm-outdated \([https://docs.npmjs.com/cli/outdated](https://docs.npmjs.com/cli/outdated)\)

### Tags
[#tip](../../tips.md)  
[#package-managers](../package-managers.md)  
[#npm](npm.md)