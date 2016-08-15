## Loading scripts \(defer vs async\)

### Summary
Slow-loading pages are frustrating for users, so it's always a good idea to optimize the way we load scripts and other resources in order to speed up our pages. One of the most common techniques to improve loading times is loading scripts asynchronously and `<script defer>` and `<script async>` are the easiest ways to achieve this.  

### Syntax
```html
<script [defer|async] src="[js-file]"></script>
```

### Example
```javascript
// script1.js
document.querySelector('#test').innerHTML = 'This is a test';
```

```javascript
// script2.js
document.querySelector('#test').innerHTML = 'This is a test';
```

```html
<html>
  <head>
    <title>Loading scripts</title>
    <script src="script1.js" defer></script>
    <script src="script2.js" async></script>
  </head>
  <body>
    <script type="text/javascript">
      document.querySelector('#test').innerHTML = 'This is a test';
    </script>
    
    <div id="test"></div>
  </body>
</html>
```

Defer:  
There is a 100% guarantee the div#test will have the message 'This is a test' at the end of the execution cycle, because the defer attribute forces the browser to load the script in parallel without blocking the html rendering process (thus increasing loading times) while holding off the script execution until the page has been fully loaded (thus ensuring the correct execution of the script, if the script depends on/uses the DOM).

Async:  
There is not a 100% guarantee the div#test will have the message 'This is a test' at the end of the execution cycle, because just like the defer attribute, the async attribute forces the browser to load the script in parallel without blocking the html rendering process, but it doesn't hold off the script execution. Basically, the script executes as soon as it finishes loading. 

Inline:  
There is no way the div#test will have the message 'This is a test' at the end of the execution cycle, because the script executes before the div element has even been rendered.

![Execution](https://cloud.githubusercontent.com/assets/19519411/17654804/ba1e80c2-626c-11e6-8d0e-4baafbdd36fe.jpg)

### References
async vs defer attributes \([http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html](http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)\)

### Tags
[#tip](../../tips.md)  
[#html](../html.md)  
[#general](general.md)