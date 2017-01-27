## Mapping documents using XSLT

### Summary
Allows the developer to map xml schemas.

### Syntax
```xslt
<?xml version="1.0"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="<matcher>">
    ...
  </xsl:template>
</xsl:stylesheet>
```

|               | Option  | Description                                                         |
| :-----------: | ------- | ------------------------------------------------------------------- |
| :exclamation: | matcher | The XPath expression to be used to match an element. "/" means root |

### Examples
```xml
<car>
  <parts>
    <engine>V12 Voodoo</engine>
  </parts>
</car>
```

```xslt
<?xml version="1.0"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <xsl:element name="engines">
      <xsl:apply-template />
    </xsl:element>
  </xsl:template>

  <xsl:template match="parts/engine">
    <xsl:element name="engine">
      <xsl:value-of select="text()" />
    </xsl:element>
  </xsl:template>
</xsl:stylesheet>
```

### Output
```xml
<?xml version="1.0" encoding="UTF-8"?>
<engines>  
  <engine>V12 Voodoo</engine>
</engines>
```

### References
XSLT Tutorial \([https://www.tutorialspoint.com/xslt/index.htm](https://www.tutorialspoint.com/xslt/index.htm)\)

### Tags
[#tip](../../tips.md)  
[#xml](../xml.md)   
[#xslt](xslt.md)