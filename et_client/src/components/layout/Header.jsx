import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { ImExit } from 'react-icons/im';
import { HiOutlineLogin } from 'react-icons/hi';
import { IoCreate } from 'react-icons/io5';
import { MdDashboard } from 'react-icons/md';
import { TbTransactionDollar } from 'react-icons/tb';
import '../../index.css';
import { useUser } from '../../context/UserContext';

const Header = () => {
  const { user, setUser } = useUser();

  const handleLogOut = () => {
    alert('Logging out');
    // delete access token from localStorae
    localStorage.removeItem('accessJWT');
    setUser({});
  };
  return (
    <Navbar expand="lg" variant="dark" className="bg-dark mb-5">
      <Container>
        <Navbar.Brand href="#home">
          <span className="logo">Expense Tracker</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                {' '}
                <Link className="nav-link" to="/dashboard">
                  <MdDashboard />
                  Dashboard
                </Link>
                <Link className="nav-link" to="/transaction">
                  <TbTransactionDollar />
                  Transaction
                </Link>
                <Link className="nav-link" to="/" onClick={handleLogOut}>
                  <ImExit />
                  Log Out
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-link" to="/signup">
                  <IoCreate />
                  Sign Up
                </Link>
                <Link className="nav-link" to="/">
                  <HiOutlineLogin />
                  Sign In
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
