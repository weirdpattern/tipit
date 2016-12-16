## Extending types through unions

### Summary
Allows the developer to create complex types by extending existing ones.  

### Syntax
```typescript
type <original_type> = [original_type_definition]
type <new_type> = <original_type> & [new_type_definition]
```

### Example
```typescript
type BaseOptions = {
  path : string,
};

type UriOptions = BaseOptions & {
  sync : boolean,
  auth : string,
  headers : { [key : string] : any }
};

type LoadOptions = BaseOptions | UriOptions;

function processWithBaseOptions(options : BaseOptions) : void {
  console.log(options.path);    // logs /Users/
  console.log(options.sync);    // syntax error the BaseOptions does not contain sync
  console.log(options.auth);    // syntax error the BaseOptions does not contain auth
  console.log(options.headers); // syntax error the BaseOptions does not contain headers
}

function processWithUriOptions(options : UriOptions) : void {
  console.log(options.path);    // logs /Users/
  console.log(options.sync);    // logs true
  console.log(options.auth);    // logs undefined
  console.log(options.headers); // logs undefined
}

const options : LoadOptions = {
  path: '/Users/',
  sync: true,  
};

processWithBaseOptions(options);
processWithUriOptions(options);
```

### References  
Advanced Types \([https://www.typescriptlang.org/docs/handbook/advanced-types.html](https://www.typescriptlang.org/docs/handbook/advanced-types.html)\)  

### Tags  
[#tip](../../tips.md)  
[#typescript](../typescript.md)  
[#general](general.md)