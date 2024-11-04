import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useUser } from '../context/UserContext';
import Button from 'react-bootstrap/Button';
import { FaPlusCircle } from 'react-icons/fa';

import Form from 'react-bootstrap/Form';
import { deleteTransactions } from '../../helpers/axioshelper';
import { toast } from 'react-toastify';

const TransactionTable = () => {
  const { transaction, getTransactions, toggleModal } = useUser();
  const [displayTrans, setDisplayTrans] = useState([]);
  const [idsToDelete, setIdsToDelete] = useState([]);

  // console.log(transaction);
  useEffect(() => {
    setDisplayTrans(transaction);
  }, [transaction]);

  const balance = displayTrans.reduce((acc, trans) => {
    return trans.type === 'income' ? acc + trans.amount : acc - trans.amount;
  }, 0);

  const handleSearch = (e) => {
    const { value } = e.target;
    // console.log(value);
    const filteredTrans = transaction.filter((item) => {
      return item.title.toLowerCase().includes(value.toLowerCase());
    });
    setDisplayTrans(filteredTrans);
  };

  const handleOnSelect = (e) => {
    const { checked, name, value } = e.target;
    console.log(checked, value);
    if (value === 'all') {
      // console.log('all selected');
      checked
        ? setIdsToDelete(displayTrans.map((item) => item._id))
        : setIdsToDelete([]);
      return;
    }
    if (checked) {
      setIdsToDelete([...idsToDelete, value]);
    } else {
      setIdsToDelete(idsToDelete.filter((id) => id != value));
    }
    return;
  };
  // console.log(idsToDelete);
  const handleOnDelete = async () => {
    if (confirm(`You want to delete ${idsToDelete.length} transactions`)) {
      // console.log(idsToDelete);
      const pending = deleteTransactions(idsToDelete);
      // console.log(result);
      toast.promise(pending, {
        pending: 'Please wait',
      });
      const { status, message } = await pending;
      toast[status](message);
      status === 'success' && getTransactions() && setIdsToDelete([]);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between pt-3 mb-4">
        <div>{displayTrans.length} transactions found</div>
        <div>
          <Form.Control type="text" onChange={handleSearch} />
        </div>
        <div>
          <Button onClick={() => toggleModal(true)}>
            <FaPlusCircle /> Add transaction
          </Button>
        </div>
      </div>
      <div>
        <Form.Check
          label="Select All"
          value="all"
          onChange={handleOnSelect}
          checked={displayTrans.length === idsToDelete.length}
        />
      </div>
      <Table striped hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Transaction Title</th>
            <th>Debit(Dr)</th>
            <th>Credit(Cr)</th>
          </tr>
        </thead>
        <tbody>
          {displayTrans.length > 0 &&
            displayTrans.map((item, i) => {
              return (
                <tr key={item._id}>
                  <td>{i + 1}</td>
                  <td>
                    <Form.Check
                      label={item.createdAt.slice(0, 10)}
                      value={item._id}
                      onChange={handleOnSelect}
                      checked={idsToDelete.includes(item._id)}
                    />
                  </td>
                  <td>{item.title}</td>
                  {item.type === 'expenses' && (
                    <>
                      <td className="debit"> ${item.amount}</td>
                      <td></td>
                    </>
                  )}
                  {item.type === 'income' && (
                    <>
                      <td></td>
                      <td className="credit">{item.amount}</td>
                    </>
                  )}
                </tr>
              );
            })}
          {/* <tr>
          <td>1</td>
          <td>2024-2-23</td>
          <td>Expenses</td>
          <td>$100</td>
          <td></td>
        </tr> */}
          <tr className="fw-bold text-end">
            <td colSpan={3}>Total Balance</td>
            <td colSpan={2} className={balance > 0 ? 'credit' : 'debit'}>
              {balance}
            </td>
          </tr>
        </tbody>
      </Table>
      {idsToDelete.length > 0 && (
        <div className="d-grid  ">
          <Button variant="danger" onClick={handleOnDelete}>
            Delete {idsToDelete.length} Transaction
          </Button>
        </div>
      )}
    </>
  );
};

export default TransactionTable;
