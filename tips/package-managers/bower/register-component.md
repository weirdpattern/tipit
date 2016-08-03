## Register a component

### Summary
Tell bower how to find your component so others can use it as well.
To register a new package you must comply with the following:
- The package name must adhere to the bower.json spec.
- There must be a valid bower.json in the project’s root directory.
- Your package should use [semver](http://semver.org/) Git tags. The v prefix is allowed.
- Your package must be publicly available at a Git endpoint (e.g., GitHub).
- For private packages (e.g. GitHub Enterprise), please consider running a private Bower registry.

### Syntax
```bash
bower install <package-name> <git-endpoint>
```

|               | Option       | Description                                   |
| :-----------: | ------------ | --------------------------------------------- |
| :exclamation: | package-name | The name of the package to be registered      |
| :exclamation: | git-endpoint | The git endpoint where your package is hosted |   

### Example
```bash
$ bower install cloudine https://www.github.com/weirdpattern/cloudine.git    
```

### References
Bower Creating Packages \([https://bower.io/docs/creating-packages/#register](https://bower.io/docs/creating-packages/#register)\)

### Tags
[#tip](../../tips.md)  
[#package-managers](../package-managers.md)  
[#bower](bower.md)