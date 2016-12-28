## Using `over` to group rowsets

### Summary
Determines the partitioning and ordering of a rowset before the associated window function is applied. That is, the 
OVER clause defines a window or user-specified set of rows within a query result set. A window function then computes 
a value for each row in the window.   

You can use the OVER clause with functions to compute aggregated values such as moving averages, 
cumulative aggregates, running totals, or a top N per group results.   

### Syntax
```sql
OVER (   
       [ PARTITION BY <clause_partition> ]  
       [ ORDER BY <clause_order_by> ]   
       [ [ROW | RANGE] <clause_range> ]  
      )  
```

### Examples
```sql
SELECT Sentence
  FROM (
     SELECT manager.empname + ' has ' + CONVERT(VARCHAR, COUNT(*) OVER (PARTITION BY employee.mgrid ORDER BY employee.salary)) + ' employees' AS Sentence
       FROM dbo.Employees employee
      INNER JOIN dbo.Employees manager
         ON manager.empid = employee.mgrid
  ) Partials
 GROUP BY Sentence
 ORDER BY Sentence;
```

### Output
![Output](https://cloud.githubusercontent.com/assets/19519411/21524913/334a4436-ccdf-11e6-910b-6042daab29bf.png)

### References
OVER Clause \([https://msdn.microsoft.com/en-us/library/ms189461.aspx](https://msdn.microsoft.com/en-us/library/ms189461.aspx)\)   

### Tags
[#tip](../../tips.md)  
[#sql](../sql.md)  
[#queries](queries.md)  