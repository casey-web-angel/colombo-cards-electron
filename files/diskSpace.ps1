<# ENCODING UT8 #> [console]::OutputEncoding = New-Object System.Text.UTF8Encoding <# ENCODING UT8 #>

Get-CimInstance -ClassName Win32_LogicalDisk -Filter "DriveType=3"


