## Accessing attributes with shortcut version

### Summary
Allows the developer to access attribute values using `{` and `}` instead of `<xsl:value-of select='' />` expressions.

### Syntax
```xslt
attribute_name={<xpath>}
```

|               | Option  | Description                                                         |
| :-----------: | ------- | ------------------------------------------------------------------- |
| :exclamation: | xpath   | The XPath expression to be used to match an element. "/" means root |

### Example
The following code:

```xslt
<h3>
  <xsl:attribute name="class">
    <xsl:value-of select="$product/@type" /></xsl:value-of>
  </xsl:attribute>
  <xsl:value-of select="$product/name" />
</h3>
```

can be expressed as:

```xslt
<h3 class="{$product/@type}">
  <xsl:value-of select="$product/name" />
</h3>
```

### References
XSLT Tips for Cleaner Code and Better Performance \([https://www.onenaught.com/posts/23/xslt-tips-for-cleaner-code-and-better-performance#toc-more-tips](https://www.onenaught.com/posts/23/xslt-tips-for-cleaner-code-and-better-performance#toc-more-tips)\)

### Tags
[#tip](../../tips.md)  
[#xml](../xml.md)   
[#xslt](xslt.md)