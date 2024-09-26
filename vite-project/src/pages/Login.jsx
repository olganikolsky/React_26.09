import { useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate();
  const toHome = () => navigate('/');
  const handleClick = () => {
    alert('Вход выполнен успешно');
  };
  return (
    <div
      style={{
        padding: '30px',
      }}
    >
      <h2>Войти в учетную запись</h2>

      <form>
        <label>
          Логин
          <input type="text" placeholder="olganikolsky"></input>
        </label>
        <br></br>
        <label>
          Пароль
          <input type="password" placeholder="Введите пароль"></input>
        </label>
      </form>
      <br />
      <button onClick={handleClick}>Войти</button>
      <button onClick={toHome}>Перейти на главную</button>
    </div>
  );
}
