import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CustomForm from './CustomForm';
import { toast } from 'react-toastify';
import { PostNewUser } from '../../helpers/axiosHelper';
import useForm from '../hooks/useForm';

const initialState = {
  email: '',
  password: '',
};
const SignInForm = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);

  const fields = [
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
    },
  ];

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { ConfirmPassword, ...rest } = form;

    console.log(form);
  };

  return (
    <div className="border rounded p-4 shadow-lg ">
      <h4 className="text-center">Sign In now!!!</h4>
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

export default SignInForm;
