## Linking unpublished repositories

### Summary
Allows the developer to link unpublished modules. 

### Syntax
```bash
npm link [package]
```

|       | Option  | Description                          |
| :---: | ------- | ------------------------------------ |
|       | package | The name of the package to be linked |

### Example
You are working on two modules A and B, and B requires A.  

```bash
# tell npm you want to link repositoryA
cd repositoryA
npm link

# tell npm you want a reference to the link created in the step above.
cd ../repositoryB
npm link repositoryA

# install repositoryB dependencies (including repositoryA)
npm install
```

### References
NPM tricks \([http://www.devthought.com/2012/02/17/npm-tricks/](http://www.devthought.com/2012/02/17/npm-tricks/)\)

### Tags
[#tip](../../tips.md)  
[#package-managers](../package-managers.md)  
[#npm](npm.md)