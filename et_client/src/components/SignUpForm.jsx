import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CustomForm from './CustomForm';
import { toast } from 'react-toastify';
import { PostNewUser } from '../../helpers/axiosHelper';

const SignUpForm = () => {
  const [form, setForm] = useState({});
  const fields = [
    {
      label: 'Name',
      placeholder: 'Shankar',
      required: true,
      type: 'text',
      name: 'name',
    },
    {
      label: 'Email',
      placeholder: 'Shankar@gmail.com',
      required: true,
      type: 'email',
      name: 'email',
    },
    {
      label: 'Password',
      placeholder: '****',
      required: true,
      type: 'password',
      name: 'password',
    },
    {
      label: 'Confirm Password',
      placeholder: '****',
      required: true,
      type: 'password',
      name: 'ConfirmPassword',
    },
  ];
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { ConfirmPassword, ...rest } = form;
    if (ConfirmPassword !== rest.password) {
      return toast.error('Password do not match!');
    }
    // console.log(form);
    const { status, message } = await PostNewUser(rest);
    toast[status](message);
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
