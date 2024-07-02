import { useRouteLoaderData } from 'react-router-dom';

import ScrudForm from '../componets/ScrudForm';

function EditStudentPage() {
  const data = useRouteLoaderData('scrud-detail');

  return <ScrudForm method="patch" scrud={data.scrud} />;
}

export default EditStudentPage;
