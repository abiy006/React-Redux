import { useRouteLoaderData } from 'react-router-dom';

import FcrudForm from '../componets/FcrudForm';

function EditStudentPage() {
  const data = useRouteLoaderData('fcrud-detail');

  return <FcrudForm method="patch" fcrud={data.fcrud} />;
}

export default EditStudentPage;
