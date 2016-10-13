## View the lastest version of a package in the remote repository

### Summary
Allows the developer to get the latest version of a package with a simple command.  
That means, no need to open a browser, go to npmjs.org, etc.  

### Syntax
```bash
npm view <package> version
```

|               | Option  | Description                          |
| :-----------: | ------- | ------------------------------------ |
| :exclamation: | package | The name of the package to be viewed |

### Examples
```bash
$ npm view react version
  15.3.2

$ npm view lodash version
  4.16.4
```

### References
NPM View \([https://docs.npmjs.com/cli/view](https://docs.npmjs.com/cli/view)\)

### Tags
[#tip](../../tips.md)  
[#package-managers](../package-managers.md)  
[#npm](npm.md)