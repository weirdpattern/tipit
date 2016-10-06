## Getting the hostname from an IP address

### Summary
Allows the developer to obtain the hostname from an IP address

### Syntax
```powershell
[System.Net.Dns]::GetHostByAddress(<ip_address>)
```

### Examples
```powershell
$ [System.Net.Dns]::GetHostByAddress('10.203.10.8')
  HostName                    Aliases AddressList
  --------                    ------- -----------
  servername.domain.subdomain {}      {10.203.10.8}
```

### Output
![Hostname](https://cloud.githubusercontent.com/assets/19519411/19153980/3a6bc76c-8b9e-11e6-87c1-d7f54534e290.png)

### References
Get Hostname from IP Address using PowerShell \([https://gallery.technet.microsoft.com/scriptcenter/Get-Hostname-from-IP-ce61802f](https://gallery.technet.microsoft.com/scriptcenter/Get-Hostname-from-IP-ce61802f)\)

### Tags
[#tip](../../tips.md)  
[#powershell](../powershell.md)  
[#general](general.md)
