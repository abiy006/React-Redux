// import { Link } from 'react-router-dom';
// import { NavLink } from "react-router-dom";

import classes from "../../CSS/Samplec/SamplecList.module.css";

import SamplecDetail from './SamplecDetail';


function SamplecList({ samplecs }) {

  console.log("samplecList - samplecs - " + samplecs);


return (

  <div className={classes.samplecs}>
    <div>
      <h1>Student samplec page</h1>
    </div>

    <SamplecDetail samplecs={samplecs.samplecs} />

  </div>
);
}

export default SamplecList;

