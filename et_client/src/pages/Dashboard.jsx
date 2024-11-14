import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaBalanceScale } from 'react-icons/fa';
import { GiReceiveMoney, GiPayMoney } from 'react-icons/gi';

import { useUser } from '../context/UserContext';

const Dashboard = () => {
  const { transaction } = useUser();
  console.log(transaction);
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

  const totalIncome = income.reduce((acc, money) => acc + money.amount, 0);

  const totalExpense = income.reduce((acc, money) => acc + money.amount, 0);

  const balance = transaction.reduce(
    (acc, money) =>
      money.type === 'income' ? acc + money.amount : acc - money.amount,
    0
  );
  return (
    <Container className="p-5">
      <Row className="bg-dark p-5 rounded">
        <div>
          <Col>
            <div className="text-info fw-bolder mb-5 text-center text-uppercase ">
              Financial Status
            </div>
          </Col>
        </div>
        <div className="d-flex justify-content-between align-items-center w-100">
          <Col>
            <h2>Balance</h2>
            <div className="dashbalance  m-2 p-4 d-flex just-content-around">
              <FaBalanceScale className="fs-1" />
              <h1 className="">{balance}</h1>
            </div>
          </Col>
          <Col>
            <h2>Income</h2>
            <div className="dashbalance m-2 p-4 ">
              <GiReceiveMoney className="fs-1" />
            </div>
          </Col>
          <Col>
            <h2>Expenses</h2>

            <div className="dashbalance m-2 p-4 ">
              <GiPayMoney className="fs-1" />
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default Dashboard;
