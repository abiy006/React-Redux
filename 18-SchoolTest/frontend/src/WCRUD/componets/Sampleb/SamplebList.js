// import { Link } from 'react-router-dom';
// import { NavLink } from "react-router-dom";

import classes from "../../CSS/Sampleb/SamplebList.module.css";

import SamplebDetail from './SamplebDetail';

  function SamplebList({ samplebs }) {

    console.log("samplebList - samplebs - " + samplebs);


  return (

    <div className={classes.samplebs}>
      <div>
        <h1>Student sampleb page</h1>
      </div>

      <SamplebDetail samplebs={samplebs.samplebs} />

    </div>
  );
}

export default SamplebList;

