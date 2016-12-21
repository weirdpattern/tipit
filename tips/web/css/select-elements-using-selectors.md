## Select elements using css selectors on attributes

### Summary
Allows the developer to select elements within the DOM using simple queries on any of their attributes.  

### Syntax
```css
/* selects elements that have the attribute defined */
[<attribute>]

/* selects elements whose attribute matches the given value */
[<attribute> = <value>]

/* selects elements whose attribute contains the exact word */
[<attribute> ~= <value>]

/* selects elements whose attribute starts with the exact word */
[<attribute> |= <value>]

/* selects elements whose attribute starts with the given value */
[<attribute> ^= <value>]

/* selects elements whose attribute ends with the given value */
[<attribute> $= <value>]

/* selects elements whose attribute contains the given value */
[<attribute> *= <value>]
```

|               | Option    | Description                                                                  |
| :-----------: | --------- | ---------------------------------------------------------------------------- |
| :exclamation: | attribute | The attribute within the element that we want to inspect (href, data-*, etc) |
| :exclamation: | value     | The value we are looking for                                                 |  

### Examples
```html
<p lang="en">lang = en</p>
<p lang="en-us">lang = en-us</p>
<p lang="en-gb">lang = en-gb</p>
<p lang="es">lang = es</p>
<p lang="es-mx">lang = es-mx</p>
```

```css
[lang] {
    background-color: yellow;
}
```

![attribute](https://cloud.githubusercontent.com/assets/19519411/21399097/c3834cfc-c76f-11e6-8199-df537b1ff6aa.png)  

```css
[lang = en] {
    background-color: yellow;
}
```

![attribute-match](https://cloud.githubusercontent.com/assets/19519411/21399096/c3835260-c76f-11e6-8f16-8f213be63d04.png)  

```css
[lang ~= es] {
    background-color: yellow;
}
```

![attribute-contains-exact](https://cloud.githubusercontent.com/assets/19519411/21399098/c383bc46-c76f-11e6-826c-ee7922b6eb3d.png)  

```css
[lang |= es] {
    background-color: yellow;
}
```

![attribute-starts-exact](https://cloud.githubusercontent.com/assets/19519411/21399100/c386d930-c76f-11e6-89df-22d2658cc0e3.png)  

```css
[lang ^= en] {
    background-color: yellow;
}
```

![attribute-starts-value](https://cloud.githubusercontent.com/assets/19519411/21399101/c38bc49a-c76f-11e6-887d-456d3b4fb570.png)  

```css
[lang $= us] {
    background-color: yellow;
}
```

![attribute-ends-value](https://cloud.githubusercontent.com/assets/19519411/21399099/c3841c18-c76f-11e6-9a18-c91f49132c1b.png)  

```css
[lang *= \-] {
    background-color: yellow;
}
```

![attribute-contains-value](https://cloud.githubusercontent.com/assets/19519411/21399095/c38327f4-c76f-11e6-940d-04b3035666d5.png)  

### References
Css Selector Reference \([http://www.w3schools.com/cssref/css_selectors.asp](http://www.w3schools.com/cssref/css_selectors.asp)\)  

### Tags
[#tip](../../tips.md)  
[#web](../web.md)  
[#css](css.md)