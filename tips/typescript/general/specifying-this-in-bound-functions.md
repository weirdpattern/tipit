## Specifying `this` in functions that have been .bind()

### Summary
Allows the developer to specify the type of `this` in a function that has been .bind().     

### Syntax
```typescript
function functionName(this : ThisType [ , more_arguments ]) {
  const value = this.<method>();
  const property = this.<property>;
  ...  
}
```
<sub>* Note: replace ThisType with any type you need</sub>

### Example
```typescript
import { normalize } from 'path';
import { createWriteStream } from 'fs';

/**
 * Simple type with a write method.
 */
type Writer = { write(message : string) : void }

/**
 * Prints using `this.write()` method
 * Print method won't care that `this` is as long as it has a write method.  
 */
function print(this : Writer, message : string, ...args : Array<any>) : void {
  this.write(message.replace(/%s/g, () => args.length > 0 ? args.shift() : ''));
}

// binds process.stdout
const console = print.bind(process.stdout);

// binds write stream
const file = print.bind(createWriteStream(path.normalize('test.txt')));

console('hello {0} from process.stdout', 'world');
// logs 'hello world from process.stdout' to process.stdout (console)

file('hello {0} from file', 'world');
// logs 'hello world from file' to 'test.txt'
```

### References
This function types \([https://github.com/Microsoft/TypeScript/pull/6739](https://github.com/Microsoft/TypeScript/pull/6739)\)

### Tags
[#tip](../../tips.md)  
[#typescript](../typescript.md)  
[#general](general.md)