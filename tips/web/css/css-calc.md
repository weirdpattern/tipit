## Calculating values in css with `calc`

### Summary
This new method allows you to do simple arithmetic calculations in CSS.  
By doing so, you can adjust properties dynamically giving you more control on different viewports.

### Syntax
```css
calc(<expression>)
```
    
|               | Option     | Description                                                          |  
| :-----------: | ---------- | -------------------------------------------------------------------- |  
| :exclamation: | expression | A mathematical expression, the result of which is used as the value. |  
  
### Example
```html
<div class="container">
	<p>This div has 20px on either side.</p>
</div>
```
```css
.container{
  
  width: calc(100% - 20px);

  background-color: #CDEBC4;
  color:#6D8B64;
  text-align: center;
  padding: 25px 0;
  margin: 0 auto;
}
```

### Output   
![HTML Output](https://cloud.githubusercontent.com/assets/19519411/16934008/0ef046d6-4d18-11e6-8ac7-f98aa17c3c05.png)

### References
calc\(\) \([https://developer.mozilla.org/en-US/docs/Web/CSS/calc](https://developer.mozilla.org/en-US/docs/Web/CSS/calc)\)

### Tags
[#tip](../../tips.md)  
[#web](../web.md)  
[#css](css.md)  
