import { useRouteLoaderData } from 'react-router-dom';

import BcrudForm from '../componets/BcrudForm';

function EditStudentPage() {
  const data = useRouteLoaderData('bcrud-detail');

  return <BcrudForm method="patch" bcrud={data.bcrud} />;
}

export default EditStudentPage;
