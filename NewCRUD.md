# inorder to create crud operation ...
## 1.  Frontend
1.  Add new navigation list item into MainNavigation.js file
```
          <li>
            <NavLink
              to="/x-crud"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              X-CRUD
            </NavLink>
          </li>
```
2.  copy the crud folder and rename to the tartget name
      </br>1.1 rename the file names inside crud folders
3.  copy and rename the crud imports inside App.js file
```
import BcrudRootLayout from './BCRUD/roots/BcrudRoot';
import BcrudMainPage, { loader as BcrudLoader } from './BCRUD/pages/BcrudMain';
import BcrudNewPage from './BCRUD/pages/BcrudNew';
import { action as manipulateBcrudAction } from './BCRUD/componets/BcrudForm';
import BcrudDetailPage, {
  loader as BcrudDetailLoader,
  action as deleteBcrudAction,
} from './BCRUD/pages/BcrudDetail';
import EditBcrudPage from './BCRUD/pages/BcrudEdit';

```
4.  add new children into the main rootlayout and rename to the imported files in App.js file
```
      {
        path: 'c-crud',
        element: <CcrudRootLayout />,
        children: [
          {
            index: true,
            element: <CcrudMainPage />,
            loader: CcrudLoader,
          },
          {
            path: ':ccrudId',
            id: 'ccrud-detail',
            loader: CcrudDetailLoader,
            children: [
              {
                index: true,
                element: <CcrudDetailPage />,
                action: deleteCcrudAction,
              },
              {
                path: 'edit',
                element: <EditCcrudPage />,
                action: manipulateCcrudAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: 'new',
            element: <CcrudNewPage />,
            action: manipulateCcrudAction,
            loader: checkAuthLoader,
          },
        ],
      },
      
```

## 2.  Backend
  1.  data
    </br>1.1 copy past and rename the xcrud file to target crud file
    </br>1.2 copy past and rename the util_xcrud file to target crud file
  2.  routes
    </br>2.1 copy past and rename the xcruds file to target crud file
  3.  copy past and rename the xcruds.json file to target crud file
  4.  open app.js file and add the new target crud file paths




#Frontend
$Path1 = "frontend\src\ACRUD\*"
$Path2 = "frontend\src\BCRUD\"
Copy-Item -Path $Path1 -Destination $Path2 -Recurse
Get-Childitem $Path2 | Foreach-object { $FolderName = $_.name; Get-Childitem $Path2$FolderName | Foreach-object { $OldName = $_.name; $NewName = $_.name -replace 'Acrud','Bcrud'; Rename-Item -Path "$Path2$FolderName\$OldName" -Newname $NewName; Write-Output $("Renamed {0} to {1}" -f $OldName,$NewName)}}
Get-Childitem $Path2 | Foreach-object { $FolderName = $_.name; Get-Childitem $Path2$FolderName | Foreach-object { $FileName = $_.name; (Get-Content "$Path2$FolderName\$FileName").Replace('Acrud', 'Bcrud') | Set-Content "$Path2$FolderName\$FileName"}}
Get-Childitem $Path2 | Foreach-object { $FolderName = $_.name; Get-Childitem $Path2$FolderName | Foreach-object { $FileName = $_.name; (Get-Content "$Path2$FolderName\$FileName").Replace('acrud', 'bcrud') | Set-Content "$Path2$FolderName\$FileName"}}



#Backend
$Replace1 = "acrud"
$Replace2 = "bcrud"

$BKFile1 = "acrud"
$BKFile2 = "bcrud"
$BKPath1 = "backend\data\$BKFile1.js"
$BKPath2 = "backend\data\$BKFile2.js"
Copy-Item -Path $BKPath1 -Destination $BKPath2 -Recurse
(Get-Content $BKPath2).Replace($Replace1, $Replace2) | Set-Content $BKPath2


$BKFile3 = "util_acrud"
$BKFile4 = "util_bcrud"
$BKPath3 = "backend\data\$BKFile3.js"
$BKPath4 = "backend\data\$BKFile4.js"
Copy-Item -Path $BKPath3 -Destination $BKPath4 -Recurse
(Get-Content $BKPath4).Replace($Replace1, $Replace2) | Set-Content $BKPath4


$BKFile5 = "acruds"
$BKFile6 = "bcruds"
$BKPath5 = "backend\routes\$BKFile5.js"
$BKPath6 = "backend\routes\$BKFile6.js"
Copy-Item -Path $BKPath5 -Destination $BKPath6 -Recurse
(Get-Content $BKPath6).Replace($Replace1, $Replace2) | Set-Content $BKPath6


$BKFile7 = "acruds"
$BKFile8 = "bcruds"
$BKPath7 = "backend\$BKFile7.json"
$BKPath8 = "backend\$BKFile8.json"
Copy-Item -Path $BKPath7 -Destination $BKPath8 -Recurse
(Get-Content $BKPath8).Replace($Replace1, $Replace2) | Set-Content $BKPath8