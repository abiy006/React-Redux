import { useRouteLoaderData } from 'react-router-dom';

import WcrudForm from '../componets/WcrudForm';

function EditStudentPage() {
  const data = useRouteLoaderData('wcrud-detail');

  return <WcrudForm method="patch" student={data.student} />;
}

export default EditStudentPage;
