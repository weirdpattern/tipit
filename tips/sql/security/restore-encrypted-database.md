## Restore an encrypted database

### Summary
Describes the steps required to restore an encrypted database.

### Steps
- Create a master key.  
```sql
USE Master
GO

CREATE MASTER KEY ENCRYPTION BY PASSWORD = <password>
```

-> Alternatively you can restore the master key if a backup was provided.  
```sql
   RESTORE MASTER KEY 
      FROM FILE = '<path>'
DECRYPTION BY PASSWORD = '<decryption_password>'
ENCRYPTION BY PASSWORD = '<encryption_password>'
```

- Open the master key.  
```sql
OPEN MASTER KEY DECRYPTION BY PASSWORD = '<decryption_password>'
```

- Restore the certificate.  
```sql
CREATE CERTIFICATE <certificate_name>
  FROM FILE = '<path>' 
  WITH PRIVATE KEY (
       FILE = '<private_key_path>', 
       DECRYPTION BY PASSWORD = '<decryption_password>'
  )
```

- Alter the master key to use the new server service key (this is important!).  
```sql
ALTER MASTER KEY ADD ENCRYPTION BY SERVICE MASTER KEY
```

- Restore the database using the master key.  
```sql
RESTORE DATABASE <database>
   FROM DISK = '<path>'
   WITH NORECOVERY,
        REPLACE,
        MOVE '<logical_database_name>' TO '<path_to_mdf>',
        REPLACE,
        MOVE '<logical_database_name>' TO '<path_to_ldf>'
```

- Close the master key.  
```sql
CLOSE MASTER KEY
```

|               | Option                | Description                                                                 |
| :-----------: | --------------------- | --------------------------------------------------------------------------- |
| :exclamation: | password              | The password to be used to encrypt the master key                           |
| :exclamation: | path                  | The path to the master key file                                             |
| :exclamation: | decryption_password   | The password to be used to decrypt                                          |
| :exclamation: | encryption_password   | The password to be used to encrypt                                          |
| :exclamation: | certificate_name      | The name of the certificate to be created (must match exported certificate) |
| :exclamation: | private_key_path      | The path to the private key file                                            |
| :exclamation: | logical_database_name | The logical name of the database                                            |
| :exclamation: | path_to_mdf           | The path where the master data files are going to be stored                 |
| :exclamation: | path_to_ldf           | The path where the log data files are going to be stored                    |

### Examples
```sql
USE Master
GO

CREATE MASTER KEY ENCRYPTION BY PASSWORD = 'ASF#$^DF#@#VDF#'

OPEN MASTER KEY DECRYPTION BY PASSWORD = 'ASF#$^DF#@#VDF#'
CREATE CERTIFICATE MyCompanyCertificate
  FROM FILE = 'C://Certificates/MyCompanyCertificate.cer'
  WITH PRIVATE KEY (
       FILE = 'C://Certificates/MyCompanyCertificate.pvk'
       DECRYPTION BY PASSWORD = 'P@ssword!2'
  )

ALTER MASTER KEY ADD ENCRYPTION BY SERVICE MASTER KEY

RESTORE DATABASE MyDatabase
   FROM DISK = 'C://Databases/Backups/MyDatabase.bkp'
   WITH NORECOVERY,
        REPLACE,
        MOVE 'MyDatabase' TO 'C://Program Files/Microsoft SQL Server/<server_instance>/MSSQL/DATA/MyDatabase.mdf'
        REPLACE,
        MOVE 'MyDatabase' TO 'C://Program Files/Microsoft SQL Server/<server_instance>/MSSQL/DATA/MyDatabase_log.ldf'
        
CLOSE MASTER KEY
```

### References
Database Mirroring with Transparent Data Encryption and You \([http://ratecontrol.blogspot.com/2011/04/database-mirroring-with-transparent.html](http://ratecontrol.blogspot.com/2011/04/database-mirroring-with-transparent.html)\)

### Tags
[#tip](../../tips.md)  
[#sql](../sql.md)  
[#security](security.md)