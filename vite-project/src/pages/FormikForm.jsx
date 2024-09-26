import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Схема валидации с помощью Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .required('Имя обязательно')
    .min(2, 'Имя должно содержать минимум 2 символа'),
  email: Yup.string()
    .email('Некорректный email')
    .required('Email обязателен'),
  password: Yup.string()
    .required('Пароль обязателен')
    .min(8, 'Пароль должен быть минимум 8 символов')
    .matches(/\d/, 'Пароль должен содержать хотя бы одну цифру'),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {' '}
      {() => (
        <Form>
          {' '}
          <div>
            <label>Имя</label>
            <Field name="name" type="text" />{' '}
            <ErrorMessage
              name="name"
              component="div"
              style={{ color: 'red' }}
            />{' '}
          </div>{' '}
          <div>
            <label>Email</label>
            <Field name="email" type="email" />{' '}
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: 'red' }}
            />{' '}
          </div>{' '}
          <div>
            <label>Пароль</label>
            <Field name="password" type="password" />{' '}
            <ErrorMessage
              name="password"
              component="div"
              style={{ color: 'red' }}
            />{' '}
          </div>
          <button type="submit">Отправить</button>{' '}
        </Form>
      )}{' '}
    </Formik>
  );
};

export default FormikForm;
