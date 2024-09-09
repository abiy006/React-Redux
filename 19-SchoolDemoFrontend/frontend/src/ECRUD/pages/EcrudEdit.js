import { useRouteLoaderData } from 'react-router-dom';

import EcrudForm from '../componets/EcrudForm';

function EditStudentPage() {
  const data = useRouteLoaderData('ecrud-detail');

  return <EcrudForm method="patch" ecrud={data.ecrud} />;
}

export default EditStudentPage;
