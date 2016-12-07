## Returning the record from the latest operation

### Summary
Allows the developer to return information from, or expressions based on, each row affected by an INSERT, UPDATE, DELETE, or MERGE statement.  

### Syntax
```sql
OUTPUT <performed_operation>.<column>, [<performed_operation>.<column>]
```  

|               | Option              | Description                                       |
| :-----------: | ------------------- | ------------------------------------------------- |
| :exclamation: | performed_operation | The operation being processed (DELETED, INSERTED) |
| :exclamation: | column              | The name of the column to be returned             |

### Examples
```sql
INSERT INTO Person (code, name, age)
OUTPUT INSERTED.id
VALUES ('JohnSmith', 'John Smith', 35);

-- returns 'JohnSmith'

UPDATE Person
   SET age = 40
OUTPUT DELETED.age 
      ,INSERTED.age
 WHERE code = 'JohnSmith'

-- returns 35, 40

DELETE Person
OUTPUT DELETED.*
 WHERE code = 'JohnSmith'

-- returns 'JohnSmith', 'John Smith', 35
```  

### OUTPUT
![Insert](https://cloud.githubusercontent.com/assets/19519411/20970741/7d10812a-bc54-11e6-9034-1b725eb0dcf8.png)
![Update](https://cloud.githubusercontent.com/assets/19519411/20970739/7d0e103e-bc54-11e6-8dde-1910943e505f.png)
![Delete](https://cloud.githubusercontent.com/assets/19519411/20970740/7d0f1c54-bc54-11e6-8eea-8914cf276148.png)  

### References
OUTPUT Clause \([https://msdn.microsoft.com/en-us/library/ms177564.aspx](https://msdn.microsoft.com/en-us/library/ms177564.aspx)\)

### Tags
[#tip](../../tips.md)  
[#sql](../sql.md)  
[#queries](queries.md)  