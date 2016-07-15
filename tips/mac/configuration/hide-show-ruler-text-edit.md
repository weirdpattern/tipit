## Hide or Show the ruler in TextEdit

### Summary
Force TextEdit application to render or hide the ruler.
This is important because I freaking hate that ruler =)...

### Syntax
```bash
defaults write com.apple.TextEdit ShowRuler -bool <boolean>
```

|               | Option  | Description                             |
| :-----------: | ------- | --------------------------------------- |
| :exclamation: | boolean | True/False value to Show/Hide the ruler |

### Steps
1. Open a Terminal.

2. Update the defaults settings using  
```bash
$> defaults write com.apple.TextEdit ShowRuler -bool false
```

3. Force a stop of TextEdit (if open):  
```bash
$> killall TextEdit
```

4. To revert the change use:  
```bash
$> defaults delete com.apple.TextEdit ShowRuler -bool true
```

### References
Hide TextEdit's ruler by default \([http://hints.macworld.com/article.php?story=20130812080716391](http://hints.macworld.com/article.php?story=20130812080716391)\)

### Tags
[#tip](../../tips.md)  
[#mac](../mac.md)  
[#configuration](configuration.md)