## Passing arguments to npm scripts

### Summary
Pass extra arguments to your npm scripts through the command line (instead of creating an extra script for that).

### Syntax
Invoke your script using `npm run` for a regular run.  
Append a `--` at the very end of the same command to pass extra parameters.  
<sub>
Note: the first '--' does not replace or eliminate the need for the dashes in optional arguments.  
In other words, you still need to preppend your optional arguments with the corresponding '-' or '--' (see example below).  
</sub>

### Example
In your package.json
```json
{  
  "scripts": {
    "build": "babel-node --presets es2015 script.js"
  }
}
```

In the command line (terminal)
```bash
$ npm run build
   Failed because X, Y or Z...
   
# Want to know what went wrong? 
# Send the --debug optional argument to your 'build' script, this way babel-node will give you more details...

$ npm run build -- --debug 
```

### References
NPM Run Script \([https://docs.npmjs.com/cli/run-script](https://docs.npmjs.com/cli/run-script)\)

### Tags
[#tip](../../tips.md)  
[#node](../node.md)  
[#npm](npm.md)