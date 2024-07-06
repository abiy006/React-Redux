import { useRouteLoaderData } from 'react-router-dom';

import UcrudForm from '../componets/UcrudForm';

function EditStudentPage() {
  const data = useRouteLoaderData('ucrud-detail');

  return <UcrudForm method="patch" ucrud={data.ucrud} />;
}

export default EditStudentPage;
