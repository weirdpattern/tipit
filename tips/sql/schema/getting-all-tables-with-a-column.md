## Getting all tables with a column

### Summary 
Allows the developer to get the name of all the tables that contain a specific column.

### Syntax
```sql
SELECT *
  FROM information_schema.columns
 WHERE column_name = '<column_name>'
```

|               | Option      | Description                           |
| :-----------: | ----------- | ------------------------------------- |
| :exclamation: | column_name | The name of the column to be searched |

### Examples
```sql
SELECT *
  FROM information_schema.columns
 WHERE column_name = 'employee_id'
```

### References
I want to show all tables that have specified column name \([StackOverflow](http://stackoverflow.com/questions/4197657/i-want-to-show-all-tables-that-have-specified-column-name/4197820#4197820)\)

### Tags
[#tip](../../tips.md)  
[#sql](../sql.md)  
[#schema](schema.md)