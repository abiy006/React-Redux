// import { Link } from 'react-router-dom';
// import { NavLink } from "react-router-dom";

import classes from "../../CSS/SampleaList.module.css";

import SampleaDetail from './SampleaDetail';

  function SampleaList({ sampleas }) {

    console.log("sampleaList - sampleas - " + sampleas);


  return (

    <div className={classes.sampleas}>
      <div>
        <h1>Student samplea page</h1>
      </div>

      <SampleaDetail sampleas={sampleas.sampleas} />

    </div>
  );
}

export default SampleaList;

