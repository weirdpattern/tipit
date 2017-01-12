## Using ConfigureAwait to optimize tasks

### Summary
Allows the developer to choose between capturing the current context and returning to it when the 
task has been completed or ignoring it, thus optimizing the task for speed.

### Syntax
```csharp
var awaiter = await MyAsyncMethod().ConfigureAwait(<true|false>);
```

### Examples
```csharp
private async Task DownloadFileAsync(string filename)
{
    // we don't use any UI element here, so we can safetly ignore the context.
    var content = await DownloadFileContentAsync(filename).ConfigureAwait(false);

    // this ConfigureAwait is optional (we already are in the thread pool)
    // but is a good practice to explicitly show our intention. 
    await SaveFileAsync(filename, content).ConfigureAwait(false);
}

private async void DownloadFileButton_Click(object sender, EventArgs e)
{
    // capture context, we need to go back to the UI threade to update UI elements
    await DownloadFileAsync(filenameTextBox.Text);

    // as we captured the context, we can update the UI without any problem
    resultTextBox.Text = "Download completed!";
}
```

### References
Task.ConfigureAwait Method \([https://msdn.microsoft.com/en-us/library/system.threading.tasks.task.configureawait.aspx](https://msdn.microsoft.com/en-us/library/system.threading.tasks.task.configureawait.aspx)\)

### Tags
[#tip](../../tips.md)  
[#c#](../csharp.md)  
[#concurrency](concurrency.md)