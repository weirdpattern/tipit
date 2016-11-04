## Enabling delayed variable expansion

### Summary
Batch is an interpreted language, so code is executed one statement at a time, one after another.   
Before executing the statement, all contained variables are resolved by replacing it with the actual value.  

Consider the following script:  

```batch
@echo off

:: 1
set var=before

:: 2
echo %var% :: outputs "before"

:: 3
if "%var%" == "before" (

  :: 3.a
  set var=after

  :: 3.b
  echo %var% :: outputs "before"
)

:: 4
echo %var% :: outputs "after"
```   

In 1, `var` is set to `before`  
In 2, `echo %var%` will output `before`  
In 3, `var` is expanded to its current value (`before`) in the entire statement (remember, batch executes one statement at a time)  
In 3.a., `set var` will set the value of `var` to `after`, but it won't matter, `var` has already been expanded   
In 3.b., `echo %var%` will output `before`  
In 4, `echo %var%` will output `after`  

### Syntax
```batch
@setlocal EnableDelayedExpansion
:: consume variable using !<var>! instead of %<var>%
@endlocal
```

### Examples
```batch
@echo off
@setlocal EnableDelayedExpansion

:: 1
set var=before

:: 2
echo !var! :: outputs "before"

:: 3
if "!var!" == "before" (

  :: 3.a
  set var=after
  
  :: 3.b
  echo !var! :: outputs "after" 
)

:: 4
echo !var! :: outputs "after"

@endlocal
```  

### Output
![DelayedExpansion](https://cloud.githubusercontent.com/assets/19519411/20006894/b2a2bd64-a267-11e6-8298-ca44e1d18e84.png)    

### References
EnableDelayedExpansion \([http://ss64.com/nt/delayedexpansion.html](http://ss64.com/nt/delayedexpansion.html)\)  

### Tags  
[#tip](../../tips.md)  
[#cmd](../cmd.md)  
[#general](general.md)  