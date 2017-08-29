## Invalidate cache when a file has changed

### Summary
Allows the developer to invaliate a cache item when a change in a file is detected.

### Example
```csharp
private void cacheItem(object sender, EventArgs e)  
{  
    var cache = MemoryCache.Default;  
    var fileContents = cache["filecontents"] as string;  

    if (fileContents == null)  
    {  
        var filePaths = new List<string>();  
        filePaths.Add("c:\\cache\\example.txt");  

        var policy = new CacheItemPolicy();
        policy.ChangeMonitors.Add(new HostFileChangeMonitor(filePaths));  

        fileContents = File.ReadAllText("c:\\cache\\example.txt");  
        cache.Set("filecontents", fileContents, policy);  
    }
}  
```

### References
MemoryCache class \([https://docs.microsoft.com/en-us/dotnet/api/system.runtime.caching.memorycache?view=netframework-4.7](https://docs.microsoft.com/en-us/dotnet/api/system.runtime.caching.memorycache?view=netframework-4.7)\)  

### Tags
[#tip](../../tips.md)  
[#c#](../csharp.md)  
[#caching](caching.md)