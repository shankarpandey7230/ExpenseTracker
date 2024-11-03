import { createContext, useState, useContext } from 'react';
import { fetchTransactions } from '../../helpers/axiosHelper';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [transaction, setTransaction] = useState([]);
  const [show, setShow] = useState(false);

  const toggleModal = (value) => setShow(value);
  const getTransactions = async () => {
    // fetch data using axios helper to call api
    const { status, transactions } = await fetchTransactions();
    status === 'success' && setTransaction(transactions);
  };
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        transaction,
        setTransaction,
        getTransactions,
        show,

        toggleModal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
