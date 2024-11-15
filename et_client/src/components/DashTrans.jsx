import React, { useEffect } from 'react';
import { FaBalanceScale } from 'react-icons/fa';
import { GiReceiveMoney, GiPayMoney } from 'react-icons/gi';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { useUser } from '../context/UserContext';
export const DashTrans = () => {
  const { transaction, getTransactions } = useUser();
  //   console.log(transaction);
  useEffect(() => {
    getTransactions();
  }, []);

  const income = transaction.filter((trans) => {
    if (trans.type === 'income') {
      return trans.amount;
      // console.log(trans.amount);
    }
  });
  const expenditure = transaction.filter((trans) => {
    if (trans.type === 'expenses') {
      return trans.amount;
    }
  });
  const balance = transaction.reduce(
    (acc, money) =>
      money.type === 'income' ? acc + money.amount : acc - money.amount,
    0
  );

  const totalIncome = income.reduce((acc, money) => acc + money.amount, 0);

  const totalExpense = expenditure.reduce(
    (acc, money) => acc + money.amount,
    0
  );
  return (
    <Container className="p-5 ">
      <Row>
        <div className="d-flex justify-content-around ">
          <Col>
            <h2 className="text-center">Balance</h2>
            <div className="dashbalance m-1 d-flex justify-content-around">
              <FaBalanceScale className="fs-1 mx-2" />
              <h1 className={balance < 0 ? 'debit' : 'credit'}>{balance}</h1>
            </div>
          </Col>
          <Col>
            <h2 className="text-center">Income</h2>
            <div className="dashbalance m-1  d-flex justify-content-around ">
              <GiReceiveMoney className="fs-1 mx-2 " />
              <h1>{totalIncome}</h1>
            </div>
          </Col>
          <Col>
            <h2 className="text-center">Expenses</h2>
            <div className="dashbalance m-1 d-flex justify-content-around">
              <GiPayMoney className="fs-1 mx-2" />
              <h1>{totalExpense}</h1>
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
};
