## Importing other css files in css

### Summary
Allows the developer to import style rules defined in other style sheets.

### Syntax
```css
@import <url> [list-of-media-query];
```

|               | Option              | Description                                             |
| :-----------: | ------------------- | ------------------------------------------------------- |
| :exclamation: | url                 | The url where the style sheet to be imported is located |
|               | list-of-media-query | The list of media query to be included                  |

### Examples
```css
/* common.css */
body {
  font-family: "Arial Unicode MS";
}
```
```css
/* landscape.css */
body {
  width: 1900px;
  height: 800px;
}
```
```css
/* portrait.css */
body {
  width: 800px;
  height: 1900px;
}
```
```css
/* main.css */
@import url('common.css');
@import url('landscape.css') all and (orientation:landscape);
@import url('portrait.css') all and (orientation:portrait);
```

### References
@import \([https://developer.mozilla.org/en-US/docs/Web/CSS/@import](https://developer.mozilla.org/en-US/docs/Web/CSS/@import)\)

### Tags
[#tip](../../tips.md)  
[#web](../web.md)  
[#css](css.md)