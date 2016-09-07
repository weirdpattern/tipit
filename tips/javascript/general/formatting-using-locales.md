## Formatting numbers using `toLocaleString`

### Summary

### Syntax
```javascript
<variable>.toLocaleString([locales, [, options]])
```

### Examples
```javascript
const num = 500000;
num.toLocaleString();                                                                         // logs '500,000'
num.toLocaleString('en-IN');                                                                  // logs '5,00,000'
num.toLocaleString('en-US', { style: 'currency', currency: 'USD' });                          // logs '$500,000'
num.toLocaleString('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'code' }); // logs 'USD500,000.00'
num.toLocaleString('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'name' }); // logs '500,000.00 US dollars'

const date = new Date();
date.toLocaleString();                                                            // logs '9/7/2016, 3:31:04 PM'
date.toLocaleString('en-IN');                                                     // logs '7/9/2016, 3:31:04 PM'
date.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }); // logs 'September 7, 2016'
date.toLocaleString('en-US', { hour12: false });                                  // logs '9/7/2016, 15:31:04'
```

### Outputs
![Number format](https://cloud.githubusercontent.com/assets/19519411/18328392/353b891c-7514-11e6-833e-6b9b503fd6e9.png)
![Date format](https://cloud.githubusercontent.com/assets/19519411/18328391/353a96ec-7514-11e6-9751-e05d49c1fca4.png)

### References
Number.prototype.toLocaleString() \([https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)\)
Date.prototype.toLocaleString() \([https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)\)

### Tags
[#tip](../../tips.md)  
[#javascript](../javascript.md)  
[#general](general.md)