import useAsync from '../useAsync';
import useToken from '../useToken';

import * as enrollmentApi from '../../services/enrollmentApi';

export default function useEnrollment() {
  const token = useToken();
  console.log(token);

  const {
    data: enrollment,
    loading: enrollmentLoading,
    error: enrollmentError,
    act: getEnrollment,
  } = useAsync(() => enrollmentApi.getPersonalInformations(token));

  return {
    enrollment,
    enrollmentLoading,
    enrollmentError,
    getEnrollment,
  };
}
