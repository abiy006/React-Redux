// import { Link } from 'react-router-dom';
// import { NavLink } from "react-router-dom";

import classes from "../../CSS/Samplef/SamplefList.module.css";

import SamplefDetail from './SamplefDetail';


function SamplefList({ samplefs }) {

  console.log("samplefList - samplefs - " + samplefs);


return (

  <div className={classes.samplefs}>
    <div>
      <h1>Student samplef page</h1>
    </div>

    <SamplefDetail samplefs={samplefs.samplefs} />

  </div>
);
}

export default SamplefList;

