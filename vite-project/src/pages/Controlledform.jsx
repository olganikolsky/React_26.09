import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './ControlledForm.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Имя обязательно!')
    .min(3, 'Имя должно содержать не менее 3 букв!'),
  email: Yup.string()
    .required('Пароль обязателен!')
    .email('Некорректный email!'),
});
const Formikform = () => {
  return (
    <Formik
      className="d29"
      initialValues={{ name: '', email: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => alert(JSON.stringify(values, null, 4))}
    >
      <Form>
        <h3>
          Отправить имя и электронную почту, но сначала валидация:)
        </h3>
        <div>
          <label>Имя</label>
          <Field name="name" type="text" />
          <ErrorMessage
            name="name"
            component="div"
            style={{ color: 'orange' }}
          />
        </div>
        <div>
          <label>Email</label>
          <Field name="email" type="text" />
          <ErrorMessage
            name="email"
            component="div"
            style={{ color: 'orange' }}
          />
        </div>
        <button type="submit">Отправить</button>
      </Form>
    </Formik>
  );
};

export default Formikform;
