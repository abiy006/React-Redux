// import { Link } from 'react-router-dom';
// import { NavLink } from "react-router-dom";

import classes from "../../CSS/Samplej/SamplejList.module.css";

import SamplejDetail from './SamplejDetail';


function SamplejList({ samplejs }) {

  console.log("samplejList - samplejs - " + samplejs);


return (

  <div className={classes.samplejs}>
    <div>
      <h1>Student samplej page</h1>
    </div>

    <SamplejDetail samplejs={samplejs.samplejs} />

  </div>
);
}

export default SamplejList;

