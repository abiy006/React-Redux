import { useRouteLoaderData } from 'react-router-dom';

import AcrudForm from '../componets/AcrudForm';

function EditStudentPage() {
  const data = useRouteLoaderData('acrud-detail');

  return <AcrudForm method="patch" acrud={data.acrud} />;
}

export default EditStudentPage;
