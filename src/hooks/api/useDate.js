import { getDates } from '../../services/dateApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function useDates() {
  const token = useToken();

  const { data: dates, loading: datesLoading, error: datesError } = useAsync(() => getDates(token));

  return {
    dates,
    datesLoading,
    datesError,
  };
}
