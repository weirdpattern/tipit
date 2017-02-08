## Getting all sites in a collection

### Summary
Allows the developer to retrieve a list of all sites within a collection.

### Syntax
```powershell
Get-SPWebApplication <site_url> | Get-SPSite -Limit All
```

|               | Option   | Description                    |
| :-----------: | -------- | ------------------------------ |
| :exclamation: | site_url | The url of the site collection |

### Example
```powershell
$ Get-SPWebApplication http://mysharepoint | Get-SPSite -Limit All

  Title   Url
  ======= =============================
  My Site http://mysharepoint/My%20Site
```

### References
Script to get list of sites and subsites \([https://social.technet.microsoft.com/Forums/sharepoint/en-US/b4dfb645-69f4-4abd-947c-64ca42af3a26/script-to-get-list-of-sites-and-subsites?forum=sharepointadminprevious](https://social.technet.microsoft.com/Forums/sharepoint/en-US/b4dfb645-69f4-4abd-947c-64ca42af3a26/script-to-get-list-of-sites-and-subsites?forum=sharepointadminprevious)\)


### Tags
[#tip](../../tips.md)  
[#powershell](../powershell.md)  
[#sharepoint](sharepoint.md)
 