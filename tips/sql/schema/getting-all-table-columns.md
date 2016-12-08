## Getting all table columns

### Summary
Allows the developer to get a list of all columns including all information.  

### Syntax
```sql
SELECT *
  FROM information_schema.columns
 ORDER BY table_name ASC
```

### Output
![Output](https://cloud.githubusercontent.com/assets/19519411/21014088/301260e0-bd22-11e6-9ca0-0c7842ac2dad.png)  

### References  
Information Schema Views \([https://msdn.microsoft.com/en-us/library/ms186778.aspx](https://msdn.microsoft.com/en-us/library/ms186778.aspx)\)

### Tags  
[#tip](../../tips.md)  
[#sql](../sql.md)  
[#schema](schema.md)