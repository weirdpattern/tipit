## Getting a user's active directory groups

### Summary
Allows the developer to obtain a user's AD groups through a simple command.

### Syntax
```powershell
Import-Module ActiveDirectory
Get-ADUser <username> –Properties MemberOf | Select-Object MemberOf
```

|               | Option   | Description                                |
| :-----------: | -------- | ------------------------------------------ |
| :exclamation: | username | The network id of the user to be looked up |

### Examples
```powershell
$ Import-Module ActiveDirectory
$ Get-ADUser <username> –Properties MemberOf | Select-Object MemberOf
  Admins
  AD_Mailing_Service
```

### References
Get list of AD groups a user is a member of \([http://serverfault.com/questions/532106/get-list-of-ad-groups-a-user-is-a-member-of](http://serverfault.com/questions/532106/get-list-of-ad-groups-a-user-is-a-member-of)\)

### Tags
[#tip](../../tips.md)  
[#powershell](../powershell.md)  
[#general](general.md)
