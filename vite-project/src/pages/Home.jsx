import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const inLogin = () => {
    navigate('/login');
  };
  return (
    <>
      <h1>Главная страница</h1>
      <button onClick={inLogin}>Перейти на страницу входа</button>
    </>
  );
}

export default Home;
