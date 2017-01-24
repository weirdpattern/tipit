## Using git attributes

### Summary
Allows the developer to specify attributes for given paths.   
The attributes can control the merge strategy being used, whether the file needs encryption or not, etc.   

### Syntax
```bash
# in the .git/config file
[<merge | diff | filter> "<name>"]
  <options>
```

|               | Option            | Description                                  |
| :-----------: | ----------------- | -------------------------------------------- |
| :exclamation: | merge/diff/filter | The available attributes                     |
| :exclamation: | name              | The name of the configuration being created  |
| :exclamation: | options           | The options to be activated by the attribute |

```bash
# in the .gitattribute file
<path_glob> <attribute>=<name> [<attribute>=<name>]
```

|               | Option    | Description                                   |
| :-----------: | --------- | --------------------------------------------- |
| :exclamation: | path_glob | The files to be covered by this attribute     |
| :exclamation: | attribute | The type of attribute to be activated         |
| :exclamation: | name      | The name of the configuration to be activated |

### Examples
```bash
# in the .git/config file
[merge "railschema"]
  name = Newer rails schema version
  driver = "ruby -e '\n\
                system %(git), %(merge-file), %(--marker-size=%L), %(%A), %(%O), %(%B)\n\
                b = File.read(%(%A))\n\
                b.sub!(/^<+ .*\\nActiveRecord::Schema\\.define.:version => (\\d+). do\\n=+\\nActiveRecord::Schema\\.define.:version => (\\d+). do\\n>+ .*/) do\n\
                  %(ActiveRecord::Schema.define(:version => #{[$1, $2].max}) do)\n\
                end\n\
                File.open(%(%A), %(w)) {|f| f.write(b)}\n\
                exit 1 if b.include?(%(<)*%L)'"
```

```bash
# in the .gitattribute file
db/schema.rb merge=railsschema
```

### References
gitattributes(5) \([http://nuclearsquid.com/writings/git-tricks-tips-workflows/](http://nuclearsquid.com/writings/git-tricks-tips-workflows/)\)

### Tags
[#tip](../../tips.md)  
[#git](../git.md)  
[#maintenance](maintenance.md)