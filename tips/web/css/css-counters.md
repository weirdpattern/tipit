## Using counters in css

### Summary
CSS counters are, in essence, variables maintained by CSS whose values may be incremented by CSS rules 
to track how many times they're used. This lets you adjust the appearance of content based on its placement in the document.  

### Syntax
```css
counter-reset: <name_of_counter>
counter-increment: <name_of_counter>
counter(<name_of_counter>)
```
    
|               | Option          | Description                        |  
| :-----------: | --------------- | ---------------------------------- |  
| :exclamation: | name_of_counter | The name of the counter to be used |  
  
### Example
```html
<h3>Introduction</h3>
<h3>Content</h3>
<h3>Appendix</h3>
```

```css
body {
    counter-reset: sections
}

h3::before {
    counter-increment: sections;
    content: "Section " counter(sections) ": ";
}
```

### Output   
![HTML Output](https://cloud.githubusercontent.com/assets/19519411/21355078/41b4e196-c692-11e6-8c6f-1ad7e3f23588.png)

### References
Using counters \([https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters)\)

### Tags
[#tip](../../tips.md)  
[#web](../web.md)  
[#css](css.md)  
