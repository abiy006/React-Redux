import classes from "../../CSS/Sample/SampleList.module.css";

import SampleDetail from './SampleDetail';

  function SampleList({ samples }) {
// console.log(samples)
  return (

    <div className={classes.students}>
      <div>
        <h1>Student sample page</h1>
      </div>
      <SampleDetail samples={samples.samples} />
    </div>
  );
}

export default SampleList;

