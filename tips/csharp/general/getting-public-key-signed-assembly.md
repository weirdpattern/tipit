## Getting the public key of a signed assembly

### Summary
Allows the developer to obtain the public key of a signed assembly. The public key is used when referencing an assembly.

### Syntax
```cmd
sn -p <strong_name_key> <public_key>
sn -tp <public_key>
```

|               | Option          | Description                                          |
| :-----------: | --------------- | ---------------------------------------------------- |
| :exclamation: | strong_name_key | The path to the snk file (strong name key)           |
| :exclamation: | public_key      | The path to the public key file to be generated/read |


### Examples
```cmd
$ sn -p Faculty.UnitTests.snk public.key
$ sn -tp public.key

Microsoft (R) .NET Framework Strong Name Utility  Version 4.0.30319.0
Copyright (c) Microsoft Corporation.  All rights reserved.

Public key (hash algorithm: sha1):
0024000004800000940000000602000000240000525341310004000001000100df8305fe290fad
86fa0d358915ea876d5f367f419a46d915339b071d3bf79d3029f2d42a1aa7b32632d37691abe0
e12ce1c9590ecfb1a300517722831a0c88f09f85f9276a77ee1a2cc4c507c3855769e28381bea4
e2e8722cff5c11c92b63a214e99893df76ae43ff8c639210cb633ba558e83cbfa8f2e41506ff87
bc33cdb0

Public key token is 3fcdaeacf1201b65
```

### References
Get PublicKey from *.snk file to use for InternalsVisibleTo \([https://hanskindberg.wordpress.com/2012/04/17/get-publickey-from-snk-file-to-use-for-internalsvisibleto/](https://hanskindberg.wordpress.com/2012/04/17/get-publickey-from-snk-file-to-use-for-internalsvisibleto/)\)

### Tags
[#tip](../../tips.md)  
[#c#](../csharp.md)  
[#general](general.md)