import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from '../CSS/UcrudItem.module.css';

function PaymentItem({ payment }) {
  console.log(payment)
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.ucrud}>
      <img src={payment.stud_image} alt={payment.stud_name} />
      <h1>{payment.stud_name}</h1>
      <p>{payment.stud_id}</p>
      <p>{payment.stud_grd_sec}</p>
      <p>{payment.stud_cat}</p>
      <p>{payment.stud_gender}</p>
      {token && (
        <menu className={classes.actions}>
          <Link to="edit">Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      )}
    </article>
  );
}

export default PaymentItem;
