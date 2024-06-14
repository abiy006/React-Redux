import { useRouteLoaderData } from 'react-router-dom';

import YcrudForm from '../componets/YcrudForm';

function EditStudentPage() {
  const data = useRouteLoaderData('ycrud-detail');

  return <YcrudForm method="patch" ycrud={data.ycrud} />;
}

export default EditStudentPage;