import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
  json,
  redirect
} from 'react-router-dom';

import { getAuthToken } from '../../util/auth';
import classes from '../CSS/UcrudForm.module.css';

function UcrudForm({ method, student }) {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="stud_name">Name</label>
        <input
          id="stud_name"
          type="text"
          name="stud_name"
          required
          defaultValue={student ? student.stud_name : ''}
        />
      </p>
      <p>
        <label htmlFor="stud_image">Image</label>
        <input
          id="stud_image"
          type="url"
          name="stud_image"
          required
          defaultValue={student ? student.stud_image : ''}
        />
      </p>
      <p>
        <label htmlFor="stud_id">ID</label>
        <input
          id="stud_id"
          type="text"
          name="stud_id"
          required
          defaultValue={student ? student.stud_id : ''}
        />
      </p>
      <p>
        <label htmlFor="stud_grd_sec">Grade and Section</label>
        <textarea
          id="stud_grd_sec"
          name="stud_grd_sec"
          rows="5"
          required
          defaultValue={student ? student.stud_grd_sec : ''}
        />
      </p>
      <p>
        <label htmlFor="stud_cat">Catagory</label>
        <input
          id="stud_cat"
          type="text"
          name="stud_cat"
          required
          defaultValue={student ? student.stud_cat : ''}
        />
      </p>
      <p>
        <label htmlFor="stud_gender">Gender</label>
        <input
          id="stud_gender"
          type="text"
          name="stud_gender"
          required
          defaultValue={student ? student.stud_gender : ''}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Save'}
        </button>
      </div>
    </Form>
  );
}

export default UcrudForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  const UcrudData = {
    stud_name: data.get('stud_name'),
    stud_image: data.get('stud_image'),
    stud_id: data.get('stud_id'),
    stud_grd_sec: data.get('stud_grd_sec'),
    stud_cat: data.get('stud_cat'),
    stud_gender: data.get('stud_gender'),
  };

  let url = 'http://localhost:8080/students';

  if (method === 'PATCH') {
    const ucrudId = params.ucrudId;// link to App.js file
    url = 'http://localhost:8080/students/' + ucrudId;
  }

  const token = getAuthToken();
  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify(UcrudData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: 'Could not save x.' }, { status: 500 });
  }

  return redirect('/u-crudX');
}








