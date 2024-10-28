import React, { useState } from 'react';

import useForm from '../hooks/useForm';
import CustomForm from './CustomForm';

import Transaction from '../pages/Transaction';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { PostNewTransaction } from '../../helpers/axiosHelper';

import { toast } from 'react-toastify';
const initialState = {
  type: '',
  title: '',
  amount: '',
  tdate: '',
};
const TransactionForm = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    const pending = PostNewTransaction(form);
    toast.promise(pending, {
      pending: 'please wait....',
    });
    const { status, message } = await pending;
    toast[status](message);
    // function call fetching transaction
  };
  const fields = [
    {
      label: 'Title',
      placeholder: 'Salary',
      required: true,
      type: 'text',
      name: 'title',
      value: form.title,
    },
    {
      label: 'Amount',
      placeholder: '40',
      required: true,
      type: 'number',
      name: 'amount',
      value: form.amount,
    },
    {
      label: 'TransactionDate',
      required: true,
      type: 'date',
      name: 'date',
      value: form.date,
    },
  ];
  return (
    <div className="border rounded p-4 shadow-lg ">
      <h4 className="text-center">Add your Transaction!!!</h4>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Select Transaction Type</Form.Label>
          <Form.Select name="type" onChange={handleOnChange} required>
            <option value="">--Select</option>
            <option value="income">Income</option>
            <option value="expenses">Expenses</option>
          </Form.Select>
        </Form.Group>
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

export default TransactionForm;
