import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CustomForm from './CustomForm';
import { toast } from 'react-toastify';
import { PostNewUser, loginUser } from '../../helpers/axiosHelper';
import useForm from '../hooks/useForm';
import { useUser } from '../context/UserContext';

const initialState = {
  email: '',
  password: '',
};
const SignInForm = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const { form, setForm, handleOnChange } = useForm(initialState);

  useEffect(() => {
    user?._id && navigate('/dashboard');
  }, [user?._id, navigate]);

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

    // console.log(form);
    const pendingResp = loginUser(form);

    toast.promise(pendingResp, {
      pending: 'Logging you in, Please wait',
    });
    const { status, message, user, accessJWT } = await pendingResp;

    toast[status](message);
    console.log(user, accessJWT);
    setUser(user);
    localStorage.setItem('accessJWT', accessJWT);
    // localStorage.setItem('userInfo', JSON.stringify(user));
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
