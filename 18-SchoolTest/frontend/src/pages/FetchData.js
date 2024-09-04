import React, { useEffect, useState } from "react";

function FetchData({ urlpath }) {
  console.log("urlpath - " + urlpath);

  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch('http://your-server-location/data.php') // Update with your PHP script URL
    fetch(urlpath) // Update with your PHP script URL
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setData(data['ucruds']))
      .catch((error) => console.error("Error fetching data:", error));
  }, [urlpath]);

  return (
    <p>
        The paragraph -
        {data.map((item, index) => (
        //   <li key={item.id}>
        //   Name: {item.title}, Age: {item.id}
        // </li>         
        <li key={item.id}>
            Name: {item.title}, Age: {item.id}
          </li>
        ))}
    </p>
  );
}
export default FetchData;
