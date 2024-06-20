# NUMBER TWO

#FRONTEND
$varA = "dcrud"
$varB = "ecrud"

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


