## Getting all stored procedures and arguments

### Summary
Allows the developer to get a list of all stored procedures with the corresponding arguments.

### Syntax
```sql
SELECT r.specific_name, p.*
  FROM information_schema.routines r 
 INNER JOIN information_schema.parameters p
    ON p.specific_name = r.specific_name
 WHERE r.routine_type  = 'PROCEDURE'
 ORDER BY R.ROUTINE_NAME ASC
```

### Output
![Output](https://cloud.githubusercontent.com/assets/19519411/21103006/31464d4c-c046-11e6-8ebb-1beeed0ce6a4.png)  

### References  
Information Schema Views \([https://msdn.microsoft.com/en-us/library/ms186778.aspx](https://msdn.microsoft.com/en-us/library/ms186778.aspx)\)

### Tags  
[#tip](../../tips.md)  
[#sql](../sql.md)  
[#schema](schema.md)