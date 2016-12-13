## Coalesce vs IsNull

### Summary
There are three major differences besides being ANSI or not between COALESCE and ISNULL.  
- COALESCE correctly promotes its arguments to the highest data type in the expression list, ISNULL does not.  

Code  
```sql
SELECT 15 / ISNULL(CONVERT(INT, NULL), 2.00)   -- outputs 7
SELECT 15 / COALESCE(CONVERT(INT, NULL), 2.00) -- outputs 7.5, correct value
```

Output  
![1](https://cloud.githubusercontent.com/assets/19519411/21144633/0f2dbbca-c111-11e6-8210-9e2cfb0f6945.png)   

- ISNULL can only work with 2 values while COALESCE can take a lot more.   

Code  
```sql
DECLARE @a VARCHAR(10);
DECLARE @b VARCHAR(10);
DECLARE @c VARCHAR(10);
DECLARE @d VARCHAR(10);

SET @d = 'ABC'

SELECT ISNULL(@a, ISNULL(ISNULL(@b, @c), @d)) -- outputs ABC
SELECT COALESCE(@a, @b, @c, @d)               -- outputs ABC
```

Output  
![2](https://cloud.githubusercontent.com/assets/19519411/21144634/0f31ac44-c111-11e6-81f5-50b97ed46dff.png)  

- The alternate value takes the length of the first vale with ISNULL, with COALESCE this doesn't happen.

Code  
```sql
DECLARE @a VARCHAR(3);

SELECT ISNULL(@a, 'Default value')   -- outputs Def
SELECT COALESCE(@a, 'Default value') -- outputs Default value
```

Output  
![3](https://cloud.githubusercontent.com/assets/19519411/21144635/0f35052e-c111-11e6-90cb-6b25b3548fb2.png)  

### References
Three differences between COALESCE and ISNULL \([http://wiki.lessthandot.com/index.php/Three_differences_between_COALESCE_and_ISNULL](http://wiki.lessthandot.com/index.php/Three_differences_between_COALESCE_and_ISNULL)\)  

### Tags
[#tip](../../tips.md)  
[#sql](../sql.md)  
[#general](general.md)  