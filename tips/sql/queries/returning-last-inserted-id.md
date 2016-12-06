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

### Examples
```sql
INSERT INTO Person (name, age)
VALUES ('John Smith', 30);

SELECT SCOPE_IDENTITY();
```

### Output
![Results]()

### References
Get the last inserted row ID (with SQL statement) \([Stack Overflow](http://stackoverflow.com/questions/9477502/get-the-last-inserted-row-id-with-sql-statement/9477528#9477528)\)  

### Tags
[#tip](../../tips.md)  
[#sql](../sql.md)  
[#queries](queries.md)  