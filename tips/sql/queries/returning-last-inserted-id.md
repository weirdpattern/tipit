## Returning the last inserted 

### Summary
Allows the developer to return the identity of the last operation.  

### Syntax
```sql
SELECT SCOPE_IDENTITY()

-- or
SELECT IDENT_CURRENT(<table_name>)

-- or
SELECT @@IDENTITY
```

|               | Option     | Description                                  |
| :-----------: | ---------- | -------------------------------------------- |
| :exclamation: | table_name | The name of the table whose identity we need |

### Examples
```sql
INSERT INTO Person (name, age)
VALUES ('John Smith', 30);

SELECT SCOPE_IDENTITY();
SELECT IDENT_CURRENT('Person')
SELECT @@IDENTITY

-- returns 1
-- returns 1
-- returns 1
```

### Output
![Results](https://cloud.githubusercontent.com/assets/19519411/20929360/5c4cfb50-bb8f-11e6-9646-59cc909b026a.png)  

### References
Get the last inserted row ID (with SQL statement) \([Stack Overflow](http://stackoverflow.com/questions/9477502/get-the-last-inserted-row-id-with-sql-statement/9477528#9477528)\)  

### Tags
[#tip](../../tips.md)  
[#sql](../sql.md)  
[#queries](queries.md)  