// import { Link } from 'react-router-dom';
// import { NavLink } from "react-router-dom";

import classes from "../../CSS/Sampled/SampledList.module.css";

import SampledDetail from './SampledDetail';


function SampledList({ sampleds }) {

  console.log("sampledList - sampleds - " + sampleds);


return (

  <div className={classes.sampleds}>
    <div>
      <h1>Student sampled page</h1>
    </div>

    <SampledDetail sampleds={sampleds.sampleds} />

  </div>
);
}

export default SampledList;

