## Using NOCOUNT {ON|OFF}

### Summary
Stops the message that shows the count of the number of rows affected by a Transact-SQL statement 
or stored procedure from being returned as part of the result set.  

### Syntax
```sql
-- to not return the count
SET NOCOUNT ON; 

-- to return the count
SET NOCOUNT OFF; 
```

### Examples
```sql
SET NOCOUNT OFF;
GO
PRINT N'NOCOUNT OFF';
SELECT TOP(5) * 
  FROM dbo.TimeZone;
PRINT N'--------------------';
GO

PRINT '';

SET NOCOUNT ON;
GO
PRINT N'NOCOUNT ON';
SELECT TOP(5) * 
  FROM dbo.TimeZone;
PRINT N'--------------------';
GO
```

### Output
![Output](https://cloud.githubusercontent.com/assets/19519411/21187805/dcd3b174-c1de-11e6-8614-524b8569410c.png)   

### References
SET NOCOUNT (Transact-SQL) \([https://msdn.microsoft.com/en-us/library/ms189837.aspx](https://msdn.microsoft.com/en-us/library/ms189837.aspx)\)  

### Tags
[#tip](../../tips.md)  
[#sql](../sql.md)  
[#general](general.md)  