import { useRouteLoaderData } from 'react-router-dom';

import XcrudForm from '../componets/XcrudForm';

function EditStudentPage() {
  const data = useRouteLoaderData('x-detail');

  return <XcrudForm method="patch" x_crud_route={data.x_crud_route} />;
}

export default EditStudentPage;