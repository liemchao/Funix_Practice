import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import AddUser from './components/AddUser/AddUser';
import UsersList from './components/UsersList/UsersList';
import ErrorModal from './components/ErrorModal/ErrorModal';

const messageEmptyValue = 'Please enter a valid name and age (non-empty values).'
const messageAge = 'Please enter a valid age (> 0).'
const messageDuplicateName = 'Please another name (duplicate name)).'

function App() {



  const [isDisplayModal, setIsDisplayModal] = useState(false);
  const [messageError, setMessageError] = useState('');
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const useDebounce = setTimeout(() => {
      console.log("hi")
    }, 3000)
    return () => {
      clearTimeout(useDebounce)
    };
  }, [isDisplayModal])


  const closeModal = () => {
    setIsDisplayModal(false)
  }

  const checkDuplicateUser = (userName, listUser) => {
    return listUser.findIndex((user) => {
      return userName.toUpperCase() === user.userName.toUpperCase();
    })
  }

  const checkIsNumberNThanZero = (number) => {
    let haveDot = number.includes('.');
    if (haveDot) {
      return false;
    } else {
      number = parseInt(number)
      if (number) {
        return true;
      }
      return false;
    }
  }

  const addUserHandler = (userName, age) => {
    if (!userName || !age) {
      setMessageError(messageEmptyValue);
      setIsDisplayModal(true)

    } else if (!checkIsNumberNThanZero(age)) {
      setMessageError(messageAge);
      setIsDisplayModal(true);

    } else if (checkDuplicateUser(userName, userList) > -1) {
      setMessageError(messageDuplicateName)
      setIsDisplayModal(true);

    } else {
      setUserList([...userList, {
        userName: userName, age: age
      }])
    }
  }

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
      <div>
        {isDisplayModal ? <ErrorModal messageError={messageError} onclick={closeModal} /> : <div></div>}
      </div>
    </div>
  );
}

export default App;
