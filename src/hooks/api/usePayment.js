import getPaymentInformation from '../../services/paymentApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function usePayment() {
  const token = useToken();
  console.log(token);

  const {
    data: payment,
    loading: paymentLoading,
    error: paymentError,
  } = useAsync(() => getPaymentInformation(token));

  return {
    payment,
    paymentError,
    paymentLoading,
  };
}
