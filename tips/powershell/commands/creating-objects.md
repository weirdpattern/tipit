## Creating objects to store information

### Summary
Allows the developer to create instances of specialized objects to store information.

### Syntax
```powershell
<variable> = New-Object PSObject
<variable> | Add-Member NoteProperty <property_1> -Value <property_value_1>
<variable> | Add-Member NoteProperty <property_2> -Value <property_value_2>
<variable> | Add-Member NoteProperty <property_n> -Value <property_value_n>
```

|               | Option           | Description                                         |
| :-----------: | ---------------- | --------------------------------------------------- |
| :exclamation: | variable         | The name of the variable to be created              |
| :exclamation: | property_n       | The name of the property to be added to the object  |
| :exclamation: | property_value_n | The value of the property to be added to the object |

### Examples
```powershell
$ $Instance = New-Object PSObject
$ $Instance | Add-Member NoteProperty "URL" -Value "https://google.com"
$ $Instance | Add-Member NoteProperty "WebsiteName" -Value "Google"

$ $Instance
  URL                WebsiteName
  ---                -----------
  https://google.com Google
```

### Output
![Objects](https://cloud.githubusercontent.com/assets/19519411/18875612/1acea8ca-848c-11e6-8805-8a439b7c2c78.png)

### References
The Many Ways to a Custom Object \([https://technet.microsoft.com/en-us/magazine/hh750381.aspx](https://technet.microsoft.com/en-us/magazine/hh750381.aspx)\)

### Tags
[#tip](../../tips.md)  
[#powershell](../powershell.md)  
[#commands](commands.md)