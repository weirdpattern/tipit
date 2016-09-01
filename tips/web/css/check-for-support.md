## Check if the browser supports a feature

### Summary
Allows the developer to validate whether a feature is supported by the current browser.  
If the feature is supported, then the contained code is imported.

### Syntax
```css
@supports [not](<supports-condition>) {
  [styles]
}
```

|               | Option             | Description                 |
| :-----------: | ------------------ | --------------------------- |
| :exclamation: | supports-condition | The feature to be evaluated |

### Examples
```html
<p>Supports 'font-size-adjust': <span class="support-font-size-adjust"></span></p>
<p>Supports 'flexbox': <span class="support-flexbox"></span></p>
```
```css
.support-font-size-adjust:after {
  content: '\274C';
}

.support-flexbox:after {
  content: '\274C';
}

@supports(font-size-adjust) {
  .support-font-size-adjust:after {
    content: '\2713';
  }
}

@supports(display:flex) {
  .support-flexbox:after {
    content: '\2713';
  }
}
```

### Output
![Supports](https://cloud.githubusercontent.com/assets/19519411/18186110/777078ae-7066-11e6-9e3b-ed1e513aafc6.png)

### References
An Introduction to CSS’s @supports Rule \([https://www.sitepoint.com/an-introduction-to-css-supports-rule-feature-queries](https://www.sitepoint.com/an-introduction-to-css-supports-rule-feature-queries)\)

### Tags
[#tip](../../tips.md)  
[#web](../web.md)  
[#css](css.md)