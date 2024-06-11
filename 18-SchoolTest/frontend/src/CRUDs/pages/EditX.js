import { useRouteLoaderData } from 'react-router-dom';

import XcrudForm from '../componets/XcrudForm';

function EditStudentPage() {
  const data = useRouteLoaderData('xcrud-detail');

  return <XcrudForm method="patch" xcrud={data.xcrud} />;
}

export default EditStudentPage;