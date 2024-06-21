import { useRouteLoaderData } from 'react-router-dom';

import GcrudForm from '../componets/GcrudForm';

function EditStudentPage() {
  const data = useRouteLoaderData('gcrud-detail');

  return <GcrudForm method="patch" gcrud={data.gcrud} />;
}

export default EditStudentPage;
