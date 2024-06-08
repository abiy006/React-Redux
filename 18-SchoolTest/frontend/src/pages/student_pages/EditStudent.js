import { useRouteLoaderData } from 'react-router-dom';

import StudentForm from '../../components/student_components/StudentForm';

function EditStudentPage() {
  const data = useRouteLoaderData('student-detail');

  return <StudentForm method="patch" event={data.event} />;
}

export default EditStudentPage;