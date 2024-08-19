
$From1 = "samplei"
$To1 = "samplej"

$From2 = $From1 + "s"
$To2 = $To1 + "s"

$From3 = (Get-Culture).TextInfo.ToTitleCase($From1) #"Ccrud"
$To3 = (Get-Culture).TextInfo.ToTitleCase($To1) #"Dcrud"

$From4 = $From3.ToUpper() #"CCRUD"
$To4 = $To3.ToUpper() #"DCRUD"

$From5 = $From3 + "s"
$To5 = $To3 + "s"

$From6 = $From4 + "s"
$To6 = $To4 + "s"

$var_To_Path5 = $To3 + "Item"
$var_From_Path5 = $From3 + "Item"
$var1_To_Path5 = $var_To_Path5 + ".js"
$var1_From_Path5 = $var_From_Path5 + ".js"

$var_To_Path6 = $To3 + "List"
$var_From_Path6 = $From3 + "List"
$var2_To_Path6 = $var_To_Path6 + ".js"
$var2_From_Path6 = $var_From_Path6 + ".js"

$var_From_Path7 = $From3 + "Detail"
$var3_From_Path7 = $var_From_Path7 + ".js"

$var4_From_Path8 = $From3 + "Detail.module.css"
$var4_From_Path88 = $From3 + "Item.module.css"
$var4_From_Path888 = $From3 + "List.module.css"

$var4_To_Path8 = $To3 + "Detail.module.css"
$var4_To_Path88 = $To3 + "Item.module.css"
$var4_To_Path888 = $To3 + "List.module.css"


$From_Path1 = "backend\$From2.json"
$To_Path1 = "backend\$To2.json"

Copy-Item -Path $From_Path1 -Destination $To_Path1
(Get-Content $To_Path1).Replace($From1, $To1) | Set-Content $To_Path1
(Get-Content $To_Path1).Replace($From3, $To3) | Set-Content $To_Path1


$From_Path2 = "backend\data\$From1.js"
$To_Path2 = "backend\data\$To1.js"

Copy-Item -Path $From_Path2 -Destination $To_Path2
(Get-Content $To_Path2).Replace($From1, $To1) | Set-Content $To_Path2

$From_var1 = "util_" + $From1 + ".js"
$To_var1 = "util_" + $To1 + ".js"

$From_Path3 = "backend\data\$From_var1"
$To_Path3 = "backend\data\$To_var1"

Copy-Item -Path $From_Path3 -Destination $To_Path3
(Get-Content $To_Path3).Replace($From1, $To1) | Set-Content $To_Path3

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


$From_Path5 = "frontend\src\UCRUD\componets\$From3\$var1_From_Path5"
$From_Path6 = "frontend\src\UCRUD\componets\$From3\$var2_From_Path6"

$From_Path7 = "frontend\src\UCRUD\componets\$From3\$var3_From_Path7"

$From_Path8 = "frontend\src\UCRUD\CSS\$From3\$var4_From_Path8"
$From_Path88 = "frontend\src\UCRUD\CSS\$From3\$var4_From_Path88"
$From_Path888 = "frontend\src\UCRUD\CSS\$From3\$var4_From_Path888"




New-Item -ItemType Directory -Path "frontend\src\UCRUD\componets\" -Name $To3

New-Item -ItemType Directory -Path "frontend\src\UCRUD\CSS\" -Name $To3


$To_Path5 = "frontend\src\UCRUD\componets\$To3\$var1_To_Path5"
Copy-Item -Path $From_Path5 -Destination $To_Path5

$To_Path6 = "frontend\src\UCRUD\componets\$To3\$var2_To_Path6"
Copy-Item -Path $From_Path6 -Destination $To_Path6

$var_To_Path7 = $To3 + "Detail.js"
$To_Path7 = "frontend\src\UCRUD\componets\$To3\$var_To_Path7"
Copy-Item -Path $From_Path7 -Destination $To_Path7

$To_Path8 = "frontend\src\UCRUD\CSS\$To3\$var4_To_Path8"
$To_Path88 = "frontend\src\UCRUD\CSS\$To3\$var4_To_Path88"
$To_Path888 = "frontend\src\UCRUD\CSS\$To3\$var4_To_Path888"

Copy-Item -Path $From_Path8 -Destination $To_Path8
Copy-Item -Path $From_Path88 -Destination $To_Path88
Copy-Item -Path $From_Path888 -Destination $To_Path888

(Get-Content $To_Path5).Replace($From1, $To1) | Set-Content $To_Path5
(Get-Content $To_Path5).Replace($From3, $To3) | Set-Content $To_Path5

(Get-Content $To_Path6).Replace($From1, $To1) | Set-Content $To_Path6
(Get-Content $To_Path6).Replace($From3, $To3) | Set-Content $To_Path6

(Get-Content $To_Path7).Replace($From1, $To1) | Set-Content $To_Path7
(Get-Content $To_Path7).Replace($From3, $To3) | Set-Content $To_Path7

(Get-Content $To_Path8).Replace($From1, $To1) | Set-Content $To_Path8
(Get-Content $To_Path8).Replace($From3, $To3) | Set-Content $To_Path8

(Get-Content $To_Path88).Replace($From1, $To1) | Set-Content $To_Path88
(Get-Content $To_Path88).Replace($From3, $To3) | Set-Content $To_Path88

(Get-Content $To_Path888).Replace($From1, $To1) | Set-Content $To_Path888
(Get-Content $To_Path888).Replace($From3, $To3) | Set-Content $To_Path888

(Get-Content -path "frontend\src\UCRUD\pages\UcrudXDetailPage.js" -Raw) -replace "THIS IS THE END OF $From4 IMPORT CODES","THIS IS THE END OF $From4 IMPORT CODES`n`n// THIS IS THE BEGINING OF $To4 IMPORT CODES
import $var_To_Path5 from '../componets/$To3/$var_To_Path5';
import $var_To_Path6 from '../componets/$To3/$var_To_Path6';
// THIS IS THE END OF $To4 IMPORT CODES
" | Set-Content -Path "frontend\src\UCRUD\pages\UcrudXDetailPage.js"

$var1_To1 = $To1 + 's'
(Get-Content -path "frontend\src\UCRUD\pages\UcrudXDetailPage.js" -Raw) -replace "VARIABLE $From4 ENDING","VARIABLE $From4 ENDING`n`n// VARIABLE $To4 BEGINING
    $To1,
    $var1_To1,
// VARIABLE $To4 ENDING
" | Set-Content -Path "frontend\src\UCRUD\pages\UcrudXDetailPage.js"


$var1_sus_wat = $To3 + 'Loaded'
$var2_sus_wat = $To5 + 'Loaded'

$var3_sus_wat1 = $To3 + 'Item'
$var3_sus_wat2 = $To3 + 'List'
(Get-Content -path 'frontend\src\UCRUD\pages\UcrudXDetailPage.js' -Raw) -replace "THIS IS THE END OF $From4 SUSPENSE AND AWAIT","THIS IS THE END OF $From4 SUSPENSE AND AWAIT */ }

	{ /* THIS IS THE BEGINING OF $To4 SUSPENSE AND AWAIT */ }
	      {($To1 || $To2) && (
		  
        <Suspense
          fallback={<p>$To3 Loading...</p>}
        >
          <Await resolve={$To1}>
            {($var1_sus_wat) => <$var3_sus_wat1 $To1={$var1_sus_wat} />}
          </Await>

          <Await resolve={$To2}>
            {($var2_sus_wat) => <$var3_sus_wat2 $To2={$var2_sus_wat} />}
          </Await>
        </Suspense>
      
		  )}
    { /* THIS IS THE END OF $To4 SUSPENSE AND AWAIT" | Set-Content -Path "frontend\src\UCRUD\pages\UcrudXDetailPage.js"





$varA = $To3 + 'Loaded'
$varB = $To5 + 'Loaded'

(Get-Content -path "frontend\src\UCRUD\pages\UcrudXDetailPage.js" -Raw) -replace "THIS IS THE END OF PAYMENT AWAIT FUNCTIONS","THIS IS THE END OF PAYMENT AWAIT FUNCTIONS`n`n// THIS IS THE BEGINING OF $To4 AWAIT FUNCTIONS
async function $varA(id) {
  const response = await fetch('http://localhost:8080/$To2/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected $To1.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.$To1;
  }
}

async function $varB() {
  const response = await fetch('http://localhost:8080/$To2');

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch $To2.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.$To2;
    // return resData;
  }
}
// THIS IS THE END OF $To4 AWAIT FUNCTIONS
" | Set-Content -Path "frontend\src\UCRUD\pages\UcrudXDetailPage.js"







$var1_sus_wat = $To3 + 'Loaded'
$var2_sus_wat = $To5 + 'Loaded'

$var3_sus_wat = $To1 + '-aaa-001'
$var4_sus_wat = $To1 + '-aaa-002'

(Get-Content -path "frontend\src\UCRUD\pages\UcrudXDetailPage.js" -Raw) -replace "THIS IS THE END OF PAYMENT ELSE IF STATEMENT","THIS IS THE END OF PAYMENT ELSE IF STATEMENT`n`n// THIS IS THE BEGINING OF $To4 ELSE IF STATEMENT
  else if (
    id === '$var3_sus_wat' ||
    id === '$var4_sus_wat'
  ) {
    return defer({
      $To1 : await $var1_sus_wat(id),
      $To2 : $var2_sus_wat(),
    });
  }
// THIS IS THE END OF $To4 ELSE IF STATEMENT
" | Set-Content -Path "frontend\src\UCRUD\pages\UcrudXDetailPage.js"





$jsonfile = 'backend\ucruds.json'
$json = Get-Content $jsonfile | Out-String | ConvertFrom-Json
$json.ucruds += @(
	@{
      "title" = "$To3 Details"
      "image" = "https://t4.ftcdn.net/jpg/03/80/35/01/360_F_380350187_6FQowremgHWVZerY4k3pVDwNWj238yr5.jpg"
      "date" = "This section presents the $To1"
      "description" = "sldhfkjhdsfk1"
      "number" = "10"
      "id" = $To1 + "-aaa-001"
    }
)
$json | ConvertTo-Json | Set-Content $jsonfile



