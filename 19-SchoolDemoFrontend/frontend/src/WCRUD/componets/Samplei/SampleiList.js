// import { Link } from 'react-router-dom';
// import { NavLink } from "react-router-dom";

import classes from "../../CSS/Samplei/SampleiList.module.css";

import SampleiDetail from './SampleiDetail';


function SampleiList({ sampleis }) {

  console.log("sampleiList - sampleis - " + sampleis);


return (

  <div className={classes.sampleis}>
    <div>
      <h1>Student samplei page</h1>
    </div>

    <SampleiDetail sampleis={sampleis.sampleis} />

  </div>
);
}

export default SampleiList;

