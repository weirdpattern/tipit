[CmdletBinding()]
Param(
  [Parameter(Mandatory=$True)][String]$TargetProjectName,
  [Parameter(Mandatory=$True)][String]$SourceProjectName,
  [Parameter(Mandatory=$True)][String]$BuildTemplateID,
  [Parameter(Mandatory=$True)][String]$TeamFoundationUrl,
  [Parameter(Mandatory=$True)][String]$Collection
)

# Url template and headers
$buildTemplatesURL = "{0}/{1}/{2}/_apis/build/definitions/templates/{3}?api-version=2.0"
$headers = @{ "Accept" = "application/json; api-version=2.0"; "Content-Type" = "application/json" }

# Read the existing template
Write-Host "Receiving build definition template at $url"
$url = ($buildTemplatesURL -f $TeamFoundationUrl, $Collection, $SourceProjectName, $BuildTemplateID)  
$buildTemplateDef = Invoke-RestMethod -Uri $url -UseDefaultCredentials -Headers $headers -Method Get 

# Clear unnecessary stuff
$buildTemplateDef.template.PSObject.Properties.Remove("metrics")
$buildTemplateDef.template.PSObject.Properties.Remove("_links")
$buildTemplateDef.template.PSObject.Properties.Remove("repository")
$buildTemplateDef.template.PSObject.Properties.Remove("defaultBranch")
$buildTemplateDef.template.PSObject.Properties.Remove("queue")
$buildTemplateDef.template.PSObject.Properties.Remove("project")
$buildTemplateDef.template.PSObject.Properties.Remove("name")
$buildTemplateDef.template.PSObject.Properties.Remove("url")
$buildTemplateDef.template.PSObject.Properties.Remove("uri")
$buildTemplateDef.template.PSObject.Properties.Remove("id")
$buildTemplateDef.template.PSObject.Properties.Remove("revision")
$buildTemplateDef.template.PSObject.Properties.Remove("path")
$buildTemplateDef.template.PSObject.Properties.Remove("type")
$buildTemplateDef.template.PSObject.Properties.Remove("properties")
$buildTemplateDef.template.PSObject.Properties.Remove("authoredBy")

# Get a valid JSON representation
$buildTemplateDefJSON = $buildTemplateDef | ConvertTo-Json -Depth 100

# Replace all occurences of source project name
$buildTemplateDefJSON = $buildTemplateDefJSON -replace $SourceProjectName, $TargetProjectName;

# Store build definition template in new project
Write-Host "Storing build definition template to $url"
$url = ($buildTemplatesURL -f $TeamFoundationUrl, $Collection, $TargetProjectName, $BuildTemplateID)  

# Create the build definition template
Invoke-RestMethod -Uri $url -UseDefaultCredentials -Headers $headers -Method Put -Body $buildTemplateDefJSON

# And we are done
Write-Host "Done"