## Safe binding

### Summary
Allows the developer to bind a function of an object to the correct reference to `this`, in this case, the object itself.  
If the function uses `this` internally and it's not bound, then `this` will be resolved in the context of the current execution causing all sorts of problems.  
 
### Syntax
```javascript
const bind = <object>.<method>.bind(<object>);
```

|               | Option | Description                               |
| :-----------: | ------ | ----------------------------------------- |
| :exclamation: | object | The object whose method with want to bind |
| :exclamation: | method | The method to be bound                    |

### Examples
With no binding  
```javascript
let training = {
  name: 'JavaScript',
  take: function() {
    console.log(`I'm taking ${this.name} training`);
  }
};

const john = {
  name: 'John',
  train: function() {
    training.take();
  }
};

john.train(); // I'm taking JavaScript training

training = {
  name: 'C#',
  take: function() {
    console.log(`I'm taking ${this.name} training`);
  }
};

john.train(); // I'm taking C# training
```

With binding  
```javascript
let training = {
  name: 'JavaScript',
  take: function() {
    console.log(`I'm taking ${this.name} training`);
  }
};

const john = {
  name: 'John',
  train: training.take.bind(training)
};

john.train(); // I'm taking JavaScript training

training = {
  name: 'C#',
  take: function() {
    console.log(`I'm taking ${this.name} training`);
  }
};

john.train(); // I'm taking JavaScript training
```

### Output
![no-binding](https://cloud.githubusercontent.com/assets/19519411/19521361/f12a5e02-95d8-11e6-9df1-72d5a38ca3de.png)
![binding](https://cloud.githubusercontent.com/assets/19519411/19521366/f27f2d78-95d8-11e6-9728-98fd6eb237bd.png)

### References
Why use 'console.log.bind(console)' \([http://tech.genericwhite.com/why-use-console-dot-log-dot-bind-console](http://tech.genericwhite.com/why-use-console-dot-log-dot-bind-console)\)

### Tags
[#tip](../../tips.md)  
[#javascript](../javascript.md)  
[#general](general.md)