## Use plain text as default format in TextEdit

### Summary
Force TextEdit application to use plain text as default format.
This is important when you use TextEdit as a coding editor because the default rich format includes unicode characters that can render your code unusable.

### Syntax
```bash
defaults write com.apple.TextEdit RichText -bool <boolean>  
```

|               | Option  | Description                                  |
| :-----------: | ------- | -------------------------------------------- |
| :exclamation: | boolean | True/False value to Enable/Disable rich text |

### Steps
- Open a Terminal.

- Update the defaults settings using  
```bash
$> defaults write com.apple.TextEdit RichText -bool false
```

- Force a stop of TextEdit (if open):  
```bash
$> killall TextEdit
```

- To revert the change use:  
```bash
$> defaults delete com.apple.TextEdit RichText -bool true
```

### References
Use plain text as default format in TextEdit \([http://www.defaults-write.com/plain-text-default-textedit](http://www.defaults-write.com/plain-text-default-textedit)\)

### Tags
[#tip](../../tips.md)  
[#mac](../mac.md)  
[#configuration](configuration.md)