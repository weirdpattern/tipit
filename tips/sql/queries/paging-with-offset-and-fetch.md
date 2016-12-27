## Paging using `offset` and `fetch`

### Summary
The OFFSET-FETCH clause provides you with an option to fetch only a window or page of results from the result set.   
OFFSET-FETCH can be used only with the ORDER BY clause.  

### Syntax
```sql
<query>
OFFSET <records> [ ROW | ROWS ]
 FETCH [ FIRST | NEXT ] <size> [ ROW | ROWS ] ONLY;
```

### Example
```sql
DECLARE @Page INT = 0;
DECLARE @Size INT = 2;

SELECT *
  FROM employees;

SELECT *
  FROM employees
 ORDER BY empname
OFFSET @Page * @Size rows
 FETCH NEXT @Size ROWS ONLY;
```  

### Output
![Output](https://cloud.githubusercontent.com/assets/19519411/21502271/53495c70-cc14-11e6-9f50-721288a2fa55.png)

### References
OFFSET FETCH Clause \([https://technet.microsoft.com/en-us/library/gg699618.aspx](https://technet.microsoft.com/en-us/library/gg699618.aspx)\)  

### Tags
[#tip](../../tips.md)  
[#sql](../sql.md)  
[#queries](queries.md)  