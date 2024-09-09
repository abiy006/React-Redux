import { useRouteLoaderData } from 'react-router-dom';

import DcrudForm from '../componets/DcrudForm';

function EditStudentPage() {
  const data = useRouteLoaderData('dcrud-detail');

  return <DcrudForm method="patch" dcrud={data.dcrud} />;
}

export default EditStudentPage;
