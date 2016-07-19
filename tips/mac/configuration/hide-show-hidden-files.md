## Hide and Show hidden files 

### Summary
Hide and Show your hidden files with these easy commands.

### Syntax
```bash
defaults write com.apple.finder AppleShowAllFiles -bool <boolean>  
```

|               | Option  | Description                                |
| :-----------: | ------- | ------------------------------------------ |
| :exclamation: | boolean | True/False value to Show/Hide respectively |

### Steps
- Open a Terminal.

- To hide your hidden files  
```bash
$ defaults write com.apple.finder AppleShowAllFiles -bool false 
```

- To show your hidden files
```bash
$ defaults write com.apple.finder AppleShowAllFiles -bool true
```

- Restart the finder
```bash
$ killall Finder
```

### References
Quickly show/hide hidden files on Mac OS X \([http://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks](http://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks)\)

### Tags
[#tip](../../tips.md)  
[#mac](../mac.md)  
[#configuration](configuration.md)