$Replace1 = "ccrud"
$Replace2 = "dcrud"

$Replace3 = "Ccrud"
$Replace4 = "Dcrud"

$Replace5 = "CCRUD"
$Replace6 = "DCRUD"

#Frontend
New-Item –itemtype Directory –path ".\frontend\src\" -Name $Replace6
$Path1 = "frontend\src\$Replace5\*"
$Path2 = "frontend\src\$Replace6\"
Copy-Item -Path $Path1 -Destination $Path2 -Recurse
Get-Childitem $Path2 | Foreach-object { $FolderName = $_.name; Get-Childitem $Path2$FolderName | Foreach-object { $OldName = $_.name; $NewName = $_.name -replace $Replace3, $Replace4; Rename-Item -Path "$Path2$FolderName\$OldName" -Newname $NewName; Write-Output $("Renamed {0} to {1}" -f $OldName,$NewName)}}
Get-Childitem $Path2 | Foreach-object { $FolderName = $_.name; Get-Childitem $Path2$FolderName | Foreach-object { $FileName = $_.name; (Get-Content "$Path2$FolderName\$FileName").Replace($Replace3, $Replace4) | Set-Content "$Path2$FolderName\$FileName"}}
Get-Childitem $Path2 | Foreach-object { $FolderName = $_.name; Get-Childitem $Path2$FolderName | Foreach-object { $FileName = $_.name; (Get-Content "$Path2$FolderName\$FileName").Replace($Replace1, $Replace2) | Set-Content "$Path2$FolderName\$FileName"}}



#Backend
$BKFile1 = $Replace1
$BKFile2 = $Replace2
$BKPath1 = "backend\data\$BKFile1.js"
$BKPath2 = "backend\data\$BKFile2.js"
Copy-Item -Path $BKPath1 -Destination $BKPath2 -Recurse
(Get-Content $BKPath2).Replace($Replace1, $Replace2) | Set-Content $BKPath2


$BKFile3 = "util_" + $Replace1
$BKFile4 = "util_" + $Replace2
$BKPath3 = "backend\data\$BKFile3.js"
$BKPath4 = "backend\data\$BKFile4.js"
Copy-Item -Path $BKPath3 -Destination $BKPath4 -Recurse
(Get-Content $BKPath4).Replace($Replace1, $Replace2) | Set-Content $BKPath4


$BKFile5 = $Replace1 + "s"
$BKFile6 = $Replace2 + "s"
$BKPath5 = "backend\routes\$BKFile5.js"
$BKPath6 = "backend\routes\$BKFile6.js"
Copy-Item -Path $BKPath5 -Destination $BKPath6 -Recurse
(Get-Content $BKPath6).Replace($Replace1, $Replace2) | Set-Content $BKPath6


$BKFile7 = $Replace1 + "s"
$BKFile8 = $Replace2 + "s"
$BKPath7 = "backend\$BKFile7.json"
$BKPath8 = "backend\$BKFile8.json"
Copy-Item -Path $BKPath7 -Destination $BKPath8 -Recurse
(Get-Content $BKPath8).Replace($Replace1, $Replace2) | Set-Content $BKPath8



