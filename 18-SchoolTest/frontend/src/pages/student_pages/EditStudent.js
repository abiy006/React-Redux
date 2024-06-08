import { useRouteLoaderData } from 'react-router-dom';

import StudentForm from '../../components/student_components/StudentForm';

function EditStudentPage() {
  const data = useRouteLoaderData('student-detail');

  return <StudentForm method="patch" student={data.student} />;
}

export default EditStudentPage;