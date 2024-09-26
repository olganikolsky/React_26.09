import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import { Login } from './pages/Login';
import Formikform from './pages/Controlledform';
import FormikForm from './pages/Controlledform';
import './App.css';

function App() {
  return (
    <div className="box">
      <Router>
        <nav>
          <Link to="/" style={{ padding: '0 100px 0 30px' }}>
            Главная
          </Link>
          <Link to="/about" style={{ padding: '0 100px 0 30px' }}>
            О нас
          </Link>
          <Link to="/contacts" style={{ padding: '0 100px 0 30px' }}>
            Контакты
          </Link>
          <Link to="/login" style={{ padding: '0 100px 0 30px' }}>
            Войти
          </Link>
          <Link to="/formik" style={{ padding: '0 100px 0 30px' }}>
            Отправить форму
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/formik" element={<FormikForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
