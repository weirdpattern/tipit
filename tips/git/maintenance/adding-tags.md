## Adding tags

### Summary
Allows the developer to tag specific points in history as being important.

### Syntax
```bash
git tag [-a] <tag_name> [-m <message>]
```

|               | Option        | Description                           |
| :-----------: | ------------- | ------------------------------------- |
|               | a             | Mark this as an annotated tag in git. |
| :exclamation: | tag_name      | The name of the tag to be created     |
|               | m \<message\> | The tagging message to be used.       |

### Examples
```bash
$ cd my-repository
$ git tag -a v1.0.0 -m "Release 1.0.0"
```

### References
Git Basics Tagging \([https://git-scm.com/book/en/v2/Git-Basics-Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)\)

### Tags
[#tip](../../tips.md)  
[#git](../git.md)  
[#maintenance](maintenance.md)  