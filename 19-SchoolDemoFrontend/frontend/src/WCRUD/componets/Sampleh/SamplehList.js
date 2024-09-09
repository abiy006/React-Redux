// import { Link } from 'react-router-dom';
// import { NavLink } from "react-router-dom";

import classes from "../../CSS/Sampleh/SamplehList.module.css";

import SamplehDetail from './SamplehDetail';


function SamplehList({ samplehs }) {

  console.log("samplehList - samplehs - " + samplehs);


return (

  <div className={classes.samplehs}>
    <div>
      <h1>Student sampleh page</h1>
    </div>

    <SamplehDetail samplehs={samplehs.samplehs} />

  </div>
);
}

export default SamplehList;

