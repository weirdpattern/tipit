## Extending types through mapped types

### Summary
Allows the developer to take an existing type and make all properties either readonly or optionals.  

### Syntax
```ts
type <type_name> = {
    [readonly] [P in keyof T][?] = T[P];
}
```

|               | Option    | Description                         |
| :-----------: | --------- | ----------------------------------- |
| :exclamation: | type_name | The name of the alias to be created |
|               | readonly  | Marks the property as readonly      |
|               | ?         | Marks the property as optional      |

### Example
```ts
type Immutable<T> = {
    readonly [P in keyof T] : T[P];
}

type Partial<T> = {
    [P in keyof T]? : T[P];
}

interface Person {
    name: string;
    age: number;
}

type ImmutablePerson = Immutable<Person>;
type PartialPerson = Partial<Person>;
```

### References
Mapped Types \([https://www.typescriptlang.org/docs/handbook/advanced-types.html#mapped-types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#mapped-types)\)

### Tags
[#tip](../../tips.md)  
[#typescript](../typescript.md)  
[#general](general.md)