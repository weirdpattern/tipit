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
DECLARE @Message VARCHAR(5) = 'Hello'; 
 SELECT RIGHT('________' + @Message, 8) 'PADDED RIGHT'
       ,LEFT(@Message + '________', 8)  'PADDED LEFT';
```

### Output
![Output](https://cloud.githubusercontent.com/assets/19519411/21567822/ecc3888c-ce74-11e6-9aa6-c30e7a0579f4.png)

### References
RIGHT \([https://msdn.microsoft.com/en-us/library/ms177532.aspx](https://msdn.microsoft.com/en-us/library/ms177532.aspx)\)  
LEFT \([https://msdn.microsoft.com/en-us/library/ms177601.aspx](https://msdn.microsoft.com/en-us/library/ms177601.aspx)\)  

### Tags
[#tip](../../tips.md)  
[#sql](../sql.md)  
[#general](general.md)  