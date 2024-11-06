import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CustomForm from './CustomForm';
import { toast } from 'react-toastify';
import { PostNewUser } from '../../helpers/axiosHelper';
import useForm from '../hooks/useForm';

const initialState = {
  name: '',
  email: '',
  password: '',
  ConfirmPassword: '',
};
const SignUpForm = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);

  const fields = [
    {
      label: 'Name',
      placeholder: 'Shankar',
      required: true,
      type: 'text',
      name: 'name',
      value: form.name,
    },
    {
      label: 'Email',
      placeholder: 'Shankar@gmail.com',
      required: true,
      type: 'email',
      name: 'email',
      value: form.email,
    },
    {
      label: 'Password',
      placeholder: '****',
      required: true,
      type: 'password',
      name: 'password',
      value: form.password,
    },
    {
      label: 'Confirm Password',
      placeholder: '****',
      required: true,
      type: 'password',
      name: 'ConfirmPassword',
      value: form.ConfirmPassword,
    },
  ];
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { ConfirmPassword, ...rest } = form;
    if (ConfirmPassword !== rest.password) {
      return toast.error('Password do not match!');
    }

    const { status, message } = await PostNewUser(rest);
    toast[status](message);
    status === 'success' && setForm(initialState);
  };

  return (
    <div className="border rounded p-4 shadow-lg ">
      <h4 className="text-center">Sign Up now!!!</h4>
      <Form onSubmit={handleOnSubmit}>
        {fields.map((input) => (
          <CustomForm key={input.name} {...input} onChange={handleOnChange} />
        ))}

        <div className="d-grid">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignUpForm;
