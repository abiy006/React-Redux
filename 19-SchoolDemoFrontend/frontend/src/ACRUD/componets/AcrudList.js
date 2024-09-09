import { Link } from 'react-router-dom';

import classes from '../CSS/AcrudList.module.css';

function StudentsList({acruds}) {
  // let li_count = 1;
  return (
    <div className={classes.acruds}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {acruds.map((acrud, index) => (
          <li key={acrud.id} className={classes.item} style={index % 2 === 0 ? {backgroundColor: 'gray'} : {backgroundColor: '#31302e'}}>
            <Link to={`/a-crud/${acrud.id}`}>
              <img src={acrud.image} alt={acrud.title} />
              <div className={classes.content}>
                <h2>{acrud.title}</h2>
                <time>{acrud.date}</time>
              </div>
            </Link>
          </li>
          ))}
      </ul>
    </div>
  );
}

export default StudentsList;








