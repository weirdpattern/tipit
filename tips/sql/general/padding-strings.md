## Padding strings using `RIGHT` and `LEFT`

### Summary 
Allows the developer to pad strings with a specific character.

### Syntax
```sql
RIGHT(<character> + <string>, <desire_length>)
LEFT(<string> + <character>, <desire_length>)
```

### Example
```sql
SELECT RIGHT('________' + 'Hello', 8) 'PADDED RIGHT'
      ,LEFT('Hello' + '________', 8)  'PADDED LEFT';
```

### Output
![Output](https://cloud.githubusercontent.com/assets/19519411/21567777/76fcc550-ce74-11e6-90bd-079f14a9e0fc.png)

### References
RIGHT \([https://msdn.microsoft.com/en-us/library/ms177532.aspx](https://msdn.microsoft.com/en-us/library/ms177532.aspx)\)  
LEFT \([https://msdn.microsoft.com/en-us/library/ms177601.aspx](https://msdn.microsoft.com/en-us/library/ms177601.aspx)\)  

### Tags
[#tip](../../tips.md)  
[#sql](../sql.md)  
[#general](general.md)  