import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { DashTrans } from '../components/DashTrans';
import ExpensePieChart from '../components/ExpensePieChart';
const Dashboard = () => {
  return (
    <>
      <h2 className="text-center">Dashboard</h2>
      <hr className="w-75 mx-auto" />
      <Container className="p-5">
        <Row className="bg-dark  p-5 rounded gap-2">
          <Col></Col>

          <DashTrans />
          <ExpensePieChart />
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
