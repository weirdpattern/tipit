## Validate strings using string literal types

### Summary
Allows the developer to specify a valid range of valid strings for a field.  

### Syntax
```typescript
type <name> = <string_literal> [, <string_literal_2>, <string_literal_n> ]
```

|               | Option           | Description                                  |
| :-----------: | ---------------- | -------------------------------------------- |
| :exclamation: | name             | The name of the alias to be created          |
| :exclamation: | string_literal   | A string literal to be included in the alias |
|               | string_literal_2 | A string literal to be included in the alias |
|               | string_literal_n | A string literal to be included in the alias |

### Example
```typescript
type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'OPTIONS' | 'HEAD' | 'TRACE' | 'CONNECT';

function request(url : string, { method : HttpMethod }) : ClientRequest {
  if (method === 'GET') {
    return http.get(url);
  } else {
    return http.request({
      host: url,
      method
    })
  }
}

request('https://google.com', { method: 'GET' });   // ok
request('https://google.com', { method: 'OTHER' }); // compilation error
```

### References
String Literal Types \([https://www.typescriptlang.org/docs/handbook/advanced-types.html](https://www.typescriptlang.org/docs/handbook/advanced-types.html)\)

### Tags
[#tip](../../tips.md)  
[#typescript](../typescript.md)  
[#general](general.md)