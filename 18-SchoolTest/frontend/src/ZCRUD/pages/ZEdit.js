import { useRouteLoaderData } from 'react-router-dom';

import ZcrudForm from '../componets/ZcrudForm';

function EditStudentPage() {
  const data = useRouteLoaderData('zcrud-detail');

  return <ZcrudForm method="patch" zcrud={data.zcrud} />;
}

export default EditStudentPage;