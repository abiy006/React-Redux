import { useRouteLoaderData } from 'react-router-dom';

import CcrudForm from '../componets/CcrudForm';

function EditStudentPage() {
  const data = useRouteLoaderData('ccrud-detail');

  return <CcrudForm method="patch" ccrud={data.ccrud} />;
}

export default EditStudentPage;
