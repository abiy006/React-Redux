import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
  json,
  redirect
} from 'react-router-dom';

import { getAuthToken } from '../../util/auth';
import classes from '../CSS/XcrudForm.module.css';

function XcrudForm({ method, xcrud }) {
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
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={xcrud ? xcrud.title : ''}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={xcrud ? xcrud.image : ''}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={xcrud ? xcrud.date : ''}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={xcrud ? xcrud.description : ''}
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

export default XcrudForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  const XcrudData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  };

  let url = 'http://localhost:8080/xcruds';

  if (method === 'PATCH') {
    const xcrudId = params.xcrudId;// link to App.js file
    url = 'http://localhost:8080/xcruds/' + xcrudId;
  }

  const token = getAuthToken();
  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify(XcrudData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: 'Could not save x.' }, { status: 500 });
  }

  return redirect('/x-crud');
}







