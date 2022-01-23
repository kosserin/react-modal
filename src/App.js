import React, {useState} from 'react';

import './App.css';
import UserForm from './components/UserForm'
import UserList from './components/UserList'
import UserModal from './components/UserModal'

function App() {

  const [users, setUsers] = useState([
    {id: 'u1', name: 'Andrija', age: 21},
    {id: 'u2', name: 'Jelena', age: 20},
    {id: 'u3', name: 'Borivoje', age: 57},
  ])

  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState('asaaaaaaaaaaaaa');

  const addUser = (name,age) => {
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({id: Math.random().toString(), name: name, age: age})
      return updatedUsers;
    })
  }

  const deleteUser = userId => {
    console.log(userId)
    setUsers(prevUsers => {
      const updatedUsers = prevUsers.filter(user => user.id !== userId);
      return updatedUsers
    })
  }

  const checkShowModal = boolean => {
    setShowModal(boolean)
  }

  const changeModalText = xd => {
    if(xd === 'invalid both') {
      setModalText('Please enter valid username and number of ages.')
    } else if( xd === 'invalid age') {
      setModalText('Please enter valid number of ages.')
    } else if( xd === 'invalid username') {
      setModalText('Please enter valid username.')
    }
  }

  return (
    <div className="App">
    <UserForm onAddUser={addUser} onCheckShowModal={checkShowModal} onChangeModalText={changeModalText}/>
    {users.length > 0 ? <UserList users={users} onDeleteUser={deleteUser} /> : <p className='no-users'>No users. Please add one.</p>}
    {showModal ? <UserModal onCheckShowModal = {checkShowModal} modalText={modalText} /> : ''}
    </div>
  );
}

export default App;
