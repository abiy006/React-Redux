# NUMBER ONE

### Create the xxxx.json from aaaa.json file

$From1 = "payment"
$To1 = "homework"

$From2 = $From1 + "s"
$To2 = $To1 + "s"

$From3 = (Get-Culture).TextInfo.ToTitleCase($From1) #"Ccrud"
$To3 = (Get-Culture).TextInfo.ToTitleCase($To1) #"Dcrud"

$From_Path1 = "backend\$From2.json"
$To_Path1 = "backend\$To2.json"

Copy-Item -Path $From_Path1 -Destination $To_Path1
(Get-Content $To_Path1).Replace($From1, $To1) | Set-Content $To_Path1
(Get-Content $To_Path1).Replace($From3, $To3) | Set-Content $To_Path1

$From_Path2 = "backend\data\$From1.js"
$To_Path2 = "backend\data\$To1.js"

Copy-Item -Path $From_Path2 -Destination $To_Path2
(Get-Content $To_Path2).Replace($From1, $To1) | Set-Content $To_Path2
<!-- (Get-Content $To_Path2).Replace($From3, $To3) | Set-Content $To_Path2 -->
<!-- (Get-Content $To_Path2).Replace($From1, $To1) | Set-Content $To_Path2
(Get-Content $To_Path2).Replace($From3, $To3) | Set-Content $To_Path2 -->

$From_var1 = "util_" + $From1 + ".js"
$To_var1 = "util_" + $To1 + ".js"

$From_Path3 = "backend\data\$From_var1"
$To_Path3 = "backend\data\$To_var1"

Copy-Item -Path $From_Path3 -Destination $To_Path3
(Get-Content $To_Path3).Replace($From1, $To1) | Set-Content $To_Path3
<!-- (Get-Content $To_Path2).Replace($From3, $To3) | Set-Content $To_Path2 -->
<!-- (Get-Content $To_Path2).Replace($From1, $To1) | Set-Content $To_Path2
(Get-Content $To_Path2).Replace($From3, $To3) | Set-Content $To_Path2 -->

$From_Path4 = "backend\routes\$From2.js"
$To_Path4 = "backend\routes\$To2.js"

Copy-Item -Path $From_Path4 -Destination $To_Path4
(Get-Content $To_Path4).Replace($From1, $To1) | Set-Content $To_Path4


$customVar = $To1 + "Routes"
(Get-Content -path "backend\app.js" -Raw) -replace "THIS IS THE END OF $From2 require","THIS IS THE END OF $From2 require `n`n// THIS IS THE BEGINING OF $To2 require
const $customVar = require('./routes/$To2');
// THIS IS THE END OF $To2 require
" | Set-Content -Path "backend\app.js"


(Get-Content -path "backend\app.js" -Raw) -replace "THIS IS THE END OF $From2 use","THIS IS THE END OF $From2 use `n`n// THIS IS THE BEGINING OF $To2 use
app.use('/$To2', $customVar);
// THIS IS THE END OF $To2 use
" | Set-Content -Path "backend\app.js"
























$Replace1 = "fcrud"
$Replace2 = "gcrud"

$Replace3 = (Get-Culture).TextInfo.ToTitleCase($Replace1) #"Ccrud"
$Replace4 = (Get-Culture).TextInfo.ToTitleCase($Replace2) #"Dcrud"

$Replace5 = $Replace3.ToUpper() #"CCRUD"
$Replace6 = $Replace4.ToUpper() #"DCRUD"

#Frontend
New-Item -ItemType Directory -Path "frontend\src\" -Name $Replace6

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
