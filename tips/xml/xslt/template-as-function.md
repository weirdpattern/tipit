## Using a templates as a functions

### Summary
Allows the developer to use a template as a function

### Syntax
```xslt
<xsl:call-template name="<template_name>">
   [<xsl:with-param select="..."/>]
</xsl:call-template>

<xsl:template name="<template_name>">
  [<xsl:param name="..." />]
</xsl:template>
```

|               | Option        | Description              |
| :-----------: | ------------- | ------------------------ |
| :exclamation: | template_name | The name of the template |

### Example
```xml
<dates>
  <date>
    <year>2017</year>
    <month>02</month>
    <day>27</day>
  </date>  
  <date>
    <year>2017</year>
    <month>02</month>
  </date>
  <date>
    <year>2017</year>
  </date>
</dates>
```

```xslt
<?xml version="1.0"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <xsl:element name="date">
      <xsl:call-template name="todate">
        <xsl:with-param select="date"/>
      </xsl:call-template>
    </xsl:element>
  </xsl:template>

  <xsl:template name="todate">
    <xsl:param name="list" />
    <xsl:for-each select="$list">
      <xsl:if test="string-length(.) = 1">
        <xsl:value-of select="'0'"/>
      </xsl:if>
      <xsl:value-of select="."/>
      <xsl:if test="position() != last()">
        <xsl:value-of select="'-'"/>
      </xsl:if>
    </xsl:for-each>
    <xsl:if test="count($list) = 2">
      <xsl:value-of select="'-01'"/>
    </xsl:if>
  </xsl:template>
</xsl:stylesheet>
```

### Output
```xml
<?xml version="1.0" encoding="UTF-8"?>
...
<date>2017-02-27</date>
<date>2017-02-01</date>
<date>2017-01-01</date>
...
```

### References
XSLT merging/concatenating values of siblings nodes \([StackOverflow](http://stackoverflow.com/questions/12585974/xslt-merging-concatenating-values-of-siblings-nodes-of-same-name-into-single-nod/12586149#12586149)\)

### Tags
[#tip](../../tips.md)  
[#xml](../xml.md)   
[#xslt](xslt.md)