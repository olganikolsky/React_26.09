import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.Object({
  name: Yup.string()
    .required('Имя обязательно!')
    .min(3, 'Имя должно содержать не менее 3 слов!'),
  email: Yup.string()
    .required('Пароль обязателен!')
    .email('Некорректный email!'),
});
const Formikform = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '' }}
      validationSchema={validationSchema}
    >
      {() => (
        <Form>
          <div>
            <label>Имя</label>
            <Field name="name" type="text" />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Formikform;
