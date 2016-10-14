## Enable encryption in a database

### Summary
Describes the steps required to enable encryption in a database.

### Steps
- Create a master key.  
```sql
USE Master
GO

CREATE MASTER KEY ENCRYPTION BY PASSWORD = <password>
```
  
- Create a certificate.  
```sql
CREATE CERTIFICATE <certificate_name>
  WITH SUBJECT = <subject>
```

- Create a database.  
```sql
CREATE DATABASE <database_name>
```

- Create the database encryption key.  
```sql
USE <database_name>
GO

CREATE DATABASE ENCRYPTION KEY
  WITH ALGORITHM = <[AES_128 | AES_192 | AES_256 | TRIPLE_DES_3KEY]>
       ENCRYPTION BY SERVER CERTIFICATE = <certificate_name>
```

- Turn encryption on.  
```sql
USE Master
GO

ALTER DATABASE <database_name>
  SET ENCRYPTION ON
```

|               | Option           | Description                                       |
| :-----------: | ---------------- | ------------------------------------------------- |
| :exclamation: | password         | The password to be used to encrypt the master key |
| :exclamation: | certificate_name | The certificate friendly name                     |
| :exclamation: | database_name    | The name of the database we are going to encrypt  |

### Examples
```sql
USE Master
GO

CREATE MASTER KEY ENCRYPTION BY PASSWORD = 'ASF#$^DF#@#VDF#'

CREATE CERTIFICATE MyCompanyCertificate
  WITH SUBJECT = 'My Company Certificate'

CREATE DATABASE MyDatabase
GO

USE MyDatabase
GO

CREATE DATABASE ENCRYPTION KEY
  WITH ALGORITHM = AES_256
       ENCRYPTION BY SERVER CERTIFICATE = 'MyCompanyCertificate'
GO

USE Master
GO

ALTER DATABASE MyDatabase
  SET ENCRYPTION ON
```

### References
Database Mirroring with Transparent Data Encryption and You  \([http://ratecontrol.blogspot.com/2011/04/database-mirroring-with-transparent.html](http://ratecontrol.blogspot.com/2011/04/database-mirroring-with-transparent.html)\)

### Tags
[#tip](../../tips.md)  
[#sql](../sql.md)  
[#security](security.md)