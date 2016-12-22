## Using `apply` to join complex queries

### Summary
The APPLY operator allows you to invoke a table-valued function for each row returned by an outer table expression of a query. 
The table-valued function acts as the right input and the outer table expression acts as the left input. The right input is 
evaluated for each row from the left input and the rows produced are combined for the final output. The list of columns produced 
by the APPLY operator is the set of columns in the left input followed by the list of columns returned by the right input.  

### Syntax
```sql
<CROSS | OUTER> APPLY <table_valued_function>
```  

### Examples

Employee table  

| column    | type        |     |
| --------- | ----------- | --- |
| empid     | int         | PK  |
| managerid | int         |     |
| empname   | varchar(25) |     |
| salary    | money       |     |   

Department table  

| column      | type        |     |
| ----------- | ----------- | --- |
| deptid      | int         | PK  |
| deptname    | varchar(25) |     |
| deptmanager | int         | FK  |  

Function that returns a list of employees by level classification (0 means manager)  

```sql
CREATE FUNCTION dbo.fn_getsubtree(@empid AS INT) 
    RETURNS @TREE TABLE
(
    empid   INT NOT NULL
    ,empname VARCHAR(25) NOT NULL
    ,mgrid   INT NULL
    ,lvl     INT NOT NULL
)
AS
BEGIN
  WITH Employees_Subtree(empid, empname, mgrid, lvl)
  AS
  ( 
    -- Manager
    SELECT empid, empname, mgrid, 0
    FROM Employees
    WHERE empid = @empid

    UNION all
    
    -- Employee
    SELECT e.empid, e.empname, e.mgrid, es.lvl+1
    FROM Employees AS e
      JOIN Employees_Subtree AS es
        ON e.mgrid = es.empid
  )
  INSERT INTO @TREE
    SELECT * FROM Employees_Subtree;

  RETURN
END
GO
```

Returns all departments with a listing of employees with levels (0 means manager)

```sql
SELECT D.deptid
      ,D.deptname
      ,D.deptmgrid
      ,ST.empid
      ,ST.empname
      ,ST.mgrid
  FROM Departments AS D
 CROSS APPLY fn_getsubtree(D.deptmgrid) AS ST;
```

### Output
![Output](https://cloud.githubusercontent.com/assets/19519411/21430146/89a82e90-c827-11e6-94f2-5ac54409b02e.png)  

### References  
Usin APPLY \([https://technet.microsoft.com/en-us/library/ms175156(v=sql.105).aspx](https://technet.microsoft.com/en-us/library/ms175156.aspx)\)
INNER JOIN vs. CROSS APPLY \([https://explainextended.com/2009/07/16/inner-join-vs-cross-apply/](https://explainextended.com/2009/07/16/inner-join-vs-cross-apply/)\)  

### Tags
[#tip](../../tips.md)  
[#sql](../sql.md)  
[#queries](queries.md)  