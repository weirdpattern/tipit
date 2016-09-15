## Getting a user's active directory groups

### Summary
Allows the developer to obtain a user's AD groups through a simple command.

### Syntax
```bat
net user /domain <username>
```

|               | Option   | Description                                |
| :-----------: | -------- | ------------------------------------------ |
| :exclamation: | username | The network id of the user to be looked up |

### Examples
```bat
$ net user /domain weirdpattern
  Admins
  AD_Mailing_Service
```

### References
Get list of AD groups a user is a member of \([http://serverfault.com/questions/532106/get-list-of-ad-groups-a-user-is-a-member-of](http://serverfault.com/questions/532106/get-list-of-ad-groups-a-user-is-a-member-of)\)

### Tags
[#tip](../../tips.md)  
[#cmd](../cmd.md)  
[#general](general.md)
