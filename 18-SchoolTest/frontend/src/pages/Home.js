

import PageContent from '../components/PageContent';

import FetchData from "./FetchData";

function HomePage() {



  return (
    <>
    <PageContent title="Welcome!">
      <p>Browse all our amazing events!</p>
    </PageContent>
    
    <FetchData urlpath="http://localhost/School-Demo/index.php" />
    </>
  );
}
// function FetchFromPHP(url){
//   // fetch('http://your-server-location/data.php') // Update with your PHP script URL
//   fetch(url) // Update with your PHP script URL
//   .then((response) => response.json())
//   .then((data) => {
//       setData(data);
//   })
//   .catch((error) => {
//       console.error('Error fetching data:', error);
//   });
// }
export default HomePage;