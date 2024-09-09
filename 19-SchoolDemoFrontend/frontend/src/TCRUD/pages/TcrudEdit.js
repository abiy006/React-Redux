import { useRouteLoaderData } from 'react-router-dom';

import TcrudForm from '../componets/TcrudForm';

function EditStudentPage() {
  const data = useRouteLoaderData('tcrud-detail');

  return <TcrudForm method="patch" tcrud={data.tcrud} />;
}

export default EditStudentPage;
