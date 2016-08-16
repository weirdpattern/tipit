## Adding content in css with `content` and `attr`

### Summary


### Syntax
```css
<selector> {
  content: [attr(<data-[attribute]>) | 'plain text']
}

<selector>::before {
  content: [attr(<data-[attribute]>) | 'plain text']
}

<selector>::after {
  content: [attr(<data-[attribute]>) | 'plain text']
}
```
    
|               | Option           | Description                                                |  
| :-----------: | ---------------- | ---------------------------------------------------------- |  
| :exclamation: | data-[attribute] | The name of the attribute to be used to populate `content` |  
  
### Example
```html
<div id="test-replace" data-attr="This is a replacement"></div>
<br/>
<div id="test-prepend" data-attr="PREFIX">This is a test</div>
<br/>
<div id="test-append" data-attr="SUFFIX">This is a test</div>
```

```css
#test-replace:after {
  content: attr(data-attr);
}

#test-prepend:before {
  content: attr(data-attr)" ";
}

#test-append:after {
  content: " "attr(data-attr);
}
```

### Output   
![HTML Output](https://cloud.githubusercontent.com/assets/19519411/17655480/6c1ad2ec-6274-11e6-9f83-5f9ca1ca5832.png)

### References
content \([https://developer.mozilla.org/en-US/docs/Web/CSS/content](https://developer.mozilla.org/en-US/docs/Web/CSS/content)\)

### Tags
[#tip](../../tips.md)  
[#web](../web.md)  
[#css](css.md)  
