import classes from "../../CSS/Parent/ParentList.module.css";

import ParentDetail from './ParentDetail';


function ParentList({ parents }) {

  // console.log("parentList - parents.parents[0].id - " + parents.parents[0].id);
return (

  <div className={classes.parents}>
    <div>
      <h1>Student parent page</h1>
    </div>
      <ParentDetail parents={parents['parents']} />
  </div>
);
}

export default ParentList;

