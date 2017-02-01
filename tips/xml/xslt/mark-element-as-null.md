## Marking an element as null

### Summary
Allows the developer to return null values for those elements without a mapped value.

### Syntax
```xslt
<xsl:element name="<name>">
  <xsl:if test="not(<expression>)">
    <xsl:attribute name="xsi:nil">true</xls:attribute>
  </xsl:if>
  <xsl:value-of select="<expression>"/>
</xsl:element>
```

|               | Option     | Description                                                         |
| :-----------: | ---------- | ------------------------------------------------------------------- |
| :exclamation: | name       | The name of the element to be created                               |
| :exclamation: | expression | The expression being used to populate the element (xpath, variable) |

### Examples
```xml
<cars>
  <car>
    <parts>
      <engine>V12 Voodoo</engine>
    </parts>
  </car>
  <car>
    <parts>
      <engine>V12 Voodoo</engine>
      <windshield>Yes</windshield>
    </parts>
  </car>
</cars>
```

```xslt
<?xml version="1.0"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <xsl:element name="engines">
      <xsl:apply-templates />
    </xsl:element>
  </xsl:template>

  <xsl:template match="cars">
    <xsl:element name="cars">
      <xsl:for-each select="car">
        <xsl:element name="car">
          <xsl:element name="engine">
            <xsl:value-of select="." />
          </xsl:element>
          <xsl:element name="windshield">
            <xsl:if test="windshield">
              <xsl:attribute name="xsi:nil">true</xls:attribute>
            </xsl:if>
            <xsl:value-of select="." />
          </xsl:element>
        </xsl:element>
      </xsl:for-each>
    </xsl:element>
  </xsl:template>
</xsl:stylesheet>
```

### Output
```xml
<cars>
  <car>
    <engine>V12 Voodoo</engine>
    <windshield xsi:nil="true"/>
  </car>
  <car>
    <engine>V12 Voodoo</engine>
    <windshield>Yes</windshild>
  </car>
</cars>
```

### References
XSLT Tutorial \([https://www.tutorialspoint.com/xslt/index.htm](https://www.tutorialspoint.com/xslt/index.htm)\)

### Tags
[#tip](../../tips.md)  
[#xml](../xml.md)   
[#xslt](xslt.md)