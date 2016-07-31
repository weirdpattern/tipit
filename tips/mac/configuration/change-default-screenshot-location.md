## Change the default screenshot save location

### Summary
Allows a user to redefine the default screenshot save location.
  
### Syntax
```bash
defaults write com.apple.screencapture location <path>  
```

|               | Option | Description             |
| :-----------: | ------ | ----------------------- |
| :exclamation: | path   | The new path to be used |

### Steps
- Open a Terminal.

- Change the default location using:  
```bash
defaults write com.apple.screencapture location ~/Screenshots/ 
```

- Restart the System UI Server so changes can take effect.
```bash 
killall SystemUIServer
```

### References
Change the default location for screenshots in Mac OS X \([http://www.defaults-write.com/change-the-location-screenshots-in-mac-os-x/](http://www.defaults-write.com/change-the-location-screenshots-in-mac-os-x/)\)

### Tags
[#tip](../../tips.md)  
[#mac](../mac.md)  
[#configuration](configuration.md)