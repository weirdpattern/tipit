## Getting date components with `DATEPART`

### Summary
Allows the developer to get components of a date in isolation.  

### Syntax
```sql
DATEPART(<part>, <date>)
```

|               | Option | Description                  |
| :-----------: | ------ | ---------------------------- |
| :exclamation: | part   | The part of the date we want |
| :exclamation: | date   | The date to be parsed        |  

### Example
```sql
DECLARE @Date DATETIME = SYSUTCDATETIME();
 
 SELECT @Date                                                       AS 'Date'
       ,RIGHT('0000'      + RTRIM(DATEPART(year, @Date)), 4)        AS 'Year'
       ,RIGHT('00'        + RTRIM(DATEPART(month, @Date)), 2)       AS 'Month'
       ,RIGHT('00'        + RTRIM(DATEPART(day, @Date)), 2)         AS 'Day'
       ,RIGHT('00'        + RTRIM(DATEPART(hour, @Date)), 2)        AS 'Hour'
       ,RIGHT('00'        + RTRIM(DATEPART(minute, @Date)), 2)      AS 'Minute'
       ,RIGHT('00'        + RTRIM(DATEPART(second, @Date)), 2)      AS 'Second'
       ,RIGHT('000'       + RTRIM(DATEPART(millisecond, @Date)), 3) AS 'Millisecond'
       ,RIGHT('000000'    + RTRIM(DATEPART(microsecond, @Date)), 6) AS 'Microsecond'
       ,RIGHT('000000000' + RTRIM(DATEPART(nanosecond, @Date)), 2)  AS 'Nanosecond'
	   ,RIGHT('00'        + RTRIM(DATEPART(quarter, @Date)), 2)     AS 'Quarter'
       ,RIGHT('000'       + RTRIM(DATEPART(dayofyear, @Date)), 3)   AS 'Day of Year'
       ,RIGHT('00'        + RTRIM(DATEPART(week, @Date)), 2)        AS 'Week'
       ,RIGHT('00'        + RTRIM(DATEPART(weekday, @Date)), 2)     AS 'Weekday';
```

### Output
![Output](https://cloud.githubusercontent.com/assets/19519411/21549453/dcfff740-cdb7-11e6-9812-f39a84ec1881.png)

### References
DATEPART \([https://msdn.microsoft.com/en-us/library/ms174420.aspx](https://msdn.microsoft.com/en-us/library/ms174420.aspx)\)

### Tags
[#tip](../../tips.md)  
[#sql](../sql.md)  
[#general](general.md)  