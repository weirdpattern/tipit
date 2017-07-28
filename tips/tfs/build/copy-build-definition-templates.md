## Copy a build definition template

### Summary
Allows the developer to copy build definition templates from one team project to another.

### Syntax
```cmd
Clone-BuildDefinitionTemplate.ps1 <target_repository> [source_repository] [build_template_id] [team_foundation_url] [collection]
```

|               | Option                | Description                                                    |
| :-----------: | --------------------- | -------------------------------------------------------------- |
| :exclamation: | target_repository     | The target repository (where do you want it?)                  |
|               | source_repository     | The source repository (where can I get it from?)               |
|               | build\_template\_id   | The id of the build template to be copied                      |
|               | team\_foundation\_url | The url of your TFS installation                               |
|               | collection            | The name of the collection where the team projects are located |

### Example
```cmd
Clone-BuildDefinitionTemplate.ps1 "My Awesome Repo" "My Base Repo" "BuildTemplate" "http://tfs" "DefaultCollection"
```

### Resources
[1] [Clone-BuildDefinitionTemplate.ps1](resources/Clone-BuildDefinitionTemplate.ps1)

### References
TFS 2017 copy build definition template between team projects \([http://www.eidias.com/blog/2017/4/18/tfs-2017-copy-build-definition-template-between-team-projects](http://www.eidias.com/blog/2017/4/18/tfs-2017-copy-build-definition-template-between-team-projects)\)

### Tags
[#tip](../../tips.md)  
[#tfs](../tfs.md)  
[#build](build.md)