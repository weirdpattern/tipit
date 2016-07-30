## Specifying revisions using ^ and ~

### Summary
Allows the developer to select specific revisions based on the latest revision.  

Use ^ to access parents.  
Use ~ to access ancestors other than the parents.  

### Syntax
- Accessing parents
```bash
<rev>^[n]

# A suffix ^ to a revision parameter means the first parent of that commit object.  
# ^<n> means the <n>th parent (i.e. <rev>^ is equivalent to <rev>^1). 
# As a special rule, <rev>^0 means the commit itself and is used when <rev> is the object name of a tag object that refers to a commit object.
```

- Accessing ancestors
```bash
<rev>~<n>

# A suffix ~<n> to a revision parameter means the commit object that is the <n>th generation ancestor of the named commit object, following only the first parents.   
# i.e. <rev>~3 is equivalent to <rev>^^^ which is equivalent to <rev>^1^1^1. 
```

### Examples
```bash
$ git reset HEAD^ # means go back to the first parent

# equivalent to
$ git reset HEAD^1

$ git reset HEAD~3 # means go back to the third generation (going up) of ancestors

# equivalent to
$ git reset HEAD^^^
 
# equivalent to 
$ git reset HEAD^1^1^1
```

<pre>
G   H   I   J
 \ /     \ /
  D   E   F
   \  |  / \
    \ | /   |
     \|/    |
      B     C
       \   /
        \ /
         A


A =      = A^0
B = A^   = A^1     = A~1
C = A^2  = A^2
D = A^^  = A^1^1   = A~2
E = B^2  = A^^2
F = B^3  = A^^3
G = A^^^ = A^1^1^1 = A~3
H = D^2  = B^^2    = A^^^2  = A~2^2
I = F^   = B^3^    = A^^3^
J = F^2  = B^3^2   = A^^3^2
</pre>

### References
Git Rev-Parse \([https://git-scm.com/docs/git-rev-parse](https://git-scm.com/docs/git-rev-parse)\)  

### Tags
[#tip](../../tips.md)  
[#git](../git.md)  
[#concepts](concepts.md)