## Coarse pointers in mobile devices

### Summary
Allows the developer to specify the type of pointer to be used.

### Syntax
```css
@media (pointer: <[none|coarse|fine]>) {
    <!-- The options -->
}
```

|       | Option | Description                                                                              |
| :---: | ------ | ---------------------------------------------------------------------------------------- |
|       | none   | The primary input mechanism of the device does not include a pointing device             |
|       | coarse | The primary input mechanism of the device includes a pointing device of limited accuracy |
|       | fine   | The primary input mechanism of the device includes an accurate pointing device           |

### Examples
```css
<!-- CSS media query within a stylesheet -->
<style type="text/css">
	.container {
	  padding: 10px;
	  border: 1px solid #CCC;
	}

	@media (pointer: coarse) {
	  .container {
	    background: pink;
	  }
	  input[type="checkbox"], 
	  input[type="radio"] {
			min-width:30px;
			min-height:40px;
			background:transparent;
	  }
	}
	
	@media (pointer: fine) {
	  .container {
	    background: yellow;
	  }
	}
</style>
```

### Output
![coarse-normal](https://cloud.githubusercontent.com/assets/19519411/23170341/76ad22e2-f814-11e6-878c-d82446706a71.png)  
![coarse-mobile](https://cloud.githubusercontent.com/assets/19519411/23170340/76abf66a-f814-11e6-84ba-6383ed24b854.png)

### References
pointer \([https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer)\)

### Tags
[#tip](../../tips.md)  
[#web](../web.md)  
[#css](css.md)