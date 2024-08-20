// import { Link } from 'react-router-dom';
// import { NavLink } from "react-router-dom";

import classes from "../../CSS/Sampleg/SamplegList.module.css";

import SamplegDetail from './SamplegDetail';


function SamplegList({ samplegs }) {

  console.log("samplegList - samplegs - " + samplegs);


return (

  <div className={classes.samplegs}>
    <div>
      <h1>Student sampleg page</h1>
    </div>

    <SamplegDetail samplegs={samplegs.samplegs} />

  </div>
);
}

export default SamplegList;

