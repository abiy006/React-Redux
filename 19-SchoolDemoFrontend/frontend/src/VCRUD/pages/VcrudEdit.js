import { useRouteLoaderData } from 'react-router-dom';

import VcrudForm from '../componets/VcrudForm';

function EditStudentPage() {
  const data = useRouteLoaderData('vcrud-detail');

  return <VcrudForm method="patch" vcrud={data.vcrud} />;
}

export default EditStudentPage;
