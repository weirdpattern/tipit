## Collapsible content in markdown

### Summary
Organize your markdown files better with collapsible content.  
Users can expand/collapse examples, quotes or long descriptions that are useful, but not indispensable.

### Syntax
```html
<details>
  <summary>[ title ]</summary>
  ...
  [ content ]
  ...
</details>
```
      
### Example
```html
<details>
  <summary>Example</summary>
  `` `javascript
  let current;
  const array = [ 1, 2, 3, 4 ];
  while (array.length) {
    current = array.shift();
    // do something else
  }
  `` `
</details>
```

### Output
![Collapsible content](https://cloud.githubusercontent.com/assets/19519411/16642449/a478461e-43d0-11e6-8afb-d97dcb8b5c50.gif)

### References
[@jbrancha](https://twitter.com/jbrancha) \([tweet](https://twitter.com/jbrancha/status/749622395879694336)\)

### Tags
[#tip](../../tips.md)  
[#github](../github.md)  
[#tricks](tricks.md)  
