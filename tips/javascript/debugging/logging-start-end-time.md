## Logging start/end times using `console.time` and `console.timeEnd`

### Summary
Starts a timer you can use to track how long an operation takes. You give each timer a unique name, and may have up to 10,000 timers running on a given page. When you call console.timeEnd() with the same name, the browser will output the time, in milliseconds, that elapsed since the timer was started.

### Syntax
```javascript
console.time(<label>);
// other operations
console.timeEnd(<label>);
```

|               | Option | Description                               |
| :-----------: | ------ | ----------------------------------------- |
| :exclamation: | label  | An identifier for the timer being created |

### Example
```javascript
function fibonacci(n) {
  return n < 1 ? 0
               : n <= 2 ? 1
                        : fibonacci(n - 1) + fibonacci(n - 2);
}

console.time('fibonacci');
fibonacci(20);
console.timeEnd('fibonacci');
```

### Output
![Fibonacci](https://cloud.githubusercontent.com/assets/19519411/17718489/e6cafba0-63d9-11e6-8d51-647a578d31f4.png)

### References
Console.time/timeEnd \([https://developer.mozilla.org/en-US/docs/Web/API/Console/time](https://developer.mozilla.org/en-US/docs/Web/API/Console/time)\)

### Tags
[#tip](../../tips.md)  
[#javascript](../javascript.md)  
[#debugging](debugging.md)