# NUMBER ONE
$Replace1 = "scrud" #THIS IS THE EXISTING CRUD OPERATION
$Replace2 = "vcrud" #THIS IS THE SUPPOSED TO BE CREATED CRUD OPERATION - THE NEW ONE

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




# NUMBER TWO

#FRONTEND
$varA = $Replace1
$varB = $Replace2

$varX = $varB.ToUpper() #"DCRUD"
$var1 = (Get-Culture).TextInfo.ToTitleCase($varB) #"Dcrud"

$var2 = $varA.Insert(1,'-') #"c-crud"
$var3 = $varB.Insert(1,'-') #"d-crud"

$var4 = ($varA.ToUpper()).Insert(1,'-') #"C-CRUD"
$var5 = ($varB.ToUpper()).Insert(1,'-') #"D-CRUD"

$var6 = $varA.ToUpper() #"CCRUD"

$var7 = $varA + "s" #"ccruds"

$var8 = $varB + "s" #"dcruds"


$varLayout = $var1 + "RootLayout"
$varRoot = $var1 + "Root"

$varMainPage = $var1 + "MainPage"
$varMain = $var1 + "Main"
$varMainLoader = $var1 + "Loader"

$varNewPage = $var1 + "NewPage"
$varNew = $var1 + "New"

$varForm = $var1 + "Form"
$varManipulateAction = "manipulate" + $var1 + "Action"

$varDetailPage = $var1 + "DetailPage"
$varDetail = $var1 + "Detail"
$varDetailLoader = $var1 + "DetailLoader"
$varDeleteAction = "delete" + $var1 + "Action"

$varEditPage = "Edit" + $var1 + "Page"
$varEdit = $var1 + "Edit"


(Get-Content -path "frontend\src\App.js" -Raw) -replace "THIS IS THE END OF $var6 IMPORT CODES","THIS IS THE END OF $var6 IMPORT CODES`n`n// THIS IS THE BEGINING OF $varX IMPORT CODES
import $varLayout from './$varX/roots/$varRoot';
import $varMainPage, { loader as $varMainLoader } from './$varX/pages/$varMain';
import $varNewPage from './$varX/pages/$varNew';
import { action as $varManipulateAction } from './$varX/componets/$varForm';
import $varDetailPage, {
  loader as $varDetailLoader,
  action as $varDeleteAction,
} from './$varX/pages/$varDetail';
import $varEditPage from './$varX/pages/$varEdit';
// THIS IS THE END OF $varX IMPORT CODES
" | Set-Content -Path "frontend\src\App.js"



$varAA = ":" + $varB + "Id"
$varBB = $varB + "-detail"
(Get-Content -path "frontend\src\App.js" -Raw) -replace "THIS IS THE END OF $var4 PATH","THIS IS THE END OF $var4 PATH`n`n// THIS IS THE BEGINING OF $var5 PATH
      {
        path: '$var3',
        element: <$varLayout />,
        children: [
          {
            index: true,
            element: <$varMainPage />,
            loader: $varMainLoader,
          },
          {
            path: '$varAA',
            id: '$varBB',
            loader: $varDetailLoader,
            children: [
              {
                index: true,
                element: <$varDetailPage />,
                action: $varDeleteAction,
              },
              {
                path: 'edit',
                element: <$varEditPage />,
                action: $varManipulateAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: 'new',
            element: <$varNewPage />,
            action: $varManipulateAction,
            loader: checkAuthLoader,
          },
        ],
      },
// THIS IS THE END OF $var5 PATH
" | Set-Content -Path "frontend\src\App.js"





(Get-Content -path "frontend\src\components\MainNavigation.js" -Raw) -replace "THIS IS THE END OF $var4 NAV LINK","THIS IS THE END OF $var4 NAV LINK */ }`n`n{ /* THIS IS THE BEGINIG OF $var5 NAV LINK */ }
          <li>
            <NavLink
              to='/$var3'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              $var5
            </NavLink>
          </li>
{ /* THIS IS THE END OF $var5 NAV LINK" | Set-Content -Path "frontend\src\components\MainNavigation.js"



$var1Form = $var1 + "Form.js"
$var1List = $var1 + "List.js"

$var1Navigation = $var1 + "Navigation.js"

$var1Detail = $var1 + "Detail.js"


(Get-Content -path "frontend\src\$varX\componets\$var1Form" -Raw) -replace $var2,$var3 | Set-Content -Path "frontend\src\$varX\componets\$var1Form"

(Get-Content -path "frontend\src\$varX\componets\$var1List" -Raw) -replace $var2,$var3 | Set-Content -Path "frontend\src\$varX\componets\$var1List"

(Get-Content -path "frontend\src\$varX\navigations\$var1Navigation" -Raw) -replace $var2,$var3 | Set-Content -Path "frontend\src\$varX\navigations\$var1Navigation"

(Get-Content -path "frontend\src\$varX\pages\$var1Detail" -Raw) -replace $var2,$var3 | Set-Content -Path "frontend\src\$varX\pages\$var1Detail"




#BACKEND
$customVar = $varB + "Routes"

(Get-Content -path "backend\app.js" -Raw) -replace "THIS IS THE END OF $var7 require","THIS IS THE END OF $var7 require `n`n// THIS IS THE BEGINING OF $var8 require
const $customVar = require('./routes/$var8');
// THIS IS THE END OF $var8 require
" | Set-Content -Path "backend\app.js"



(Get-Content -path "backend\app.js" -Raw) -replace "THIS IS THE END OF $var7 use","THIS IS THE END OF $var7 use `n`n// THIS IS THE BEGINING OF $var8 use
app.use('/$var8', $customVar);
// THIS IS THE END OF $var8 use
" | Set-Content -Path "backend\app.js"


