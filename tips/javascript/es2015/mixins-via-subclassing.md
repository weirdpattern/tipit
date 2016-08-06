## Mixins via subclassing factory

### Summary
ES2015 introduced the concept of classes and inheritance through extension. Unfortunately, the usefulness of classes for implementation inheritance is limited, because they only support single inheritance. Therefore, it is impossible to inherit tool methods from multiple sources.   

JavaScript overcomes this using mixins. A mixin is a class that contains methods for use by other classes without having to be the parent class of those other classes. Now, mixins can be applied directly to the instance of a class, but it can also be implemented at the class level via subclassing.  
   
### Syntax
```javascript
const <Mixin> = (Subclass) => class extends Subclass {
  <methods>
}

class <Implementator> extends <Mixin>(<Subclass>) {
  <methods>
}
```

### Example
```javascript
const Taxable = (Extending) => class extends Extending {
  calculateTaxes() {
    return this.items.reduce((total, item) => {
      return total + item.total
    }, 0) * 0.16;
  }
}

class Order {
  constructor(items) {
    this.items = items;
  }
}

class WorkOrder extends Order {
  constructor(items) {
    super(items);
  }
} 

class SpecialWorkOrder extends Taxable(Order) {
  constructor(items) {
    super(items);
  }
}
```

### Output
![WorkOrder](https://cloud.githubusercontent.com/assets/19519411/17443855/8e98e012-5b02-11e6-9031-0268c578bc79.png)

![SpecialWorkOrder](https://cloud.githubusercontent.com/assets/19519411/17443850/8c386824-5b02-11e6-8789-4ed8b49fa456.png)

### References
Simple mixins via subclass factories \([http://www.2ality.com/2016/05/six-nifty-es6-tricks.html#simple-mixins-via-subclass-factories](http://www.2ality.com/2016/05/six-nifty-es6-tricks.html#simple-mixins-via-subclass-factories)\)

### Tags
[#tip](../../tips.md)  
[#javascript](../javascript.md)  
[#es2015](es2015.md)
