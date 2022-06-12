import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { githubLogin } from '../../services/githubAuth';
import { toast } from 'react-toastify';
import UserContext from '../../contexts/UserContext';

export default function Callback() {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  let navigate = useNavigate();
  const { setUserData } = useContext(UserContext);

  async function createGithubUser() {
    try {
      const userData = await githubLogin(code);
      console.log(userData);
      setUserData(userData);
      toast('Login realizado com sucesso!');
      navigate('/dashboard');
    } catch (e) {
      toast('Não foi possível fazer o login!');
    }
  }

  useEffect(() => {
    createGithubUser();
  }, []);

  return <h1>Loading...</h1>;
}
