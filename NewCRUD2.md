$varX = "DCRUD"
$var1 = "Dcrud"

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


(Get-Content -path ./AppTest.js -Raw) -replace "THIS IS THE END OF CCRUD IMPORT CODES","THIS IS THE END OF CCRUDDDDD IMPORT CODES `n`n// THIS IS THE BEGINING OF $varX IMPORT CODES
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
" | Set-Content -Path ./AppTest.js




(Get-Content -path ./AppTest.js -Raw) -replace "THIS IS THE END OF C-CRUD PATH","THIS IS THE END OF C-CRUD PATH EDITED `n`n// THIS IS THE BEGINING OF D-CRUD PATH
      {
        path: 'd-crud',
        element: <$varLayout />,
        children: [
          {
            index: true,
            element: <$varMainPage />,
            loader: $varMainLoader,
          },
          {
            path: ':dcrudId',
            id: 'dcrud-detail',
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
// THIS IS THE END OF D-CRUD PATH
" | Set-Content -Path ./AppTest.js