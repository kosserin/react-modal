import React, {useState} from 'react';
import Button from './UI/Button';

import styles from './UserForm.module.css'

const UserForm = (props) => {

  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')

  const usernameHandler = e => {
    setUsername(e.target.value)
  }

  const ageHandler = e => {
    setAge(e.target.value)
    let xd = Math.floor(e.target.value);
    console.log(typeof xd)
  }

  const formHandler = e => {
    e.preventDefault();
    if(username.trim().length === 0 && (Math.floor(age) < 0 || age.trim().length === 0)) {
      props.onCheckShowModal(true)
      props.onChangeModalText('invalid both');
    } else if(Math.floor(age) < 0 || age.trim().length === 0){
      props.onCheckShowModal(true)
      props.onChangeModalText('invalid age');
    } else if(username.trim().length === 0) {
      props.onCheckShowModal(true)
      props.onChangeModalText('invalid username')
    } else {
      props.onAddUser(username, age)
      setUsername('');
      setAge('')
      console.log(e.target.children)
    }
  }

  return <form onSubmit={formHandler} className={styles['user-form']}>
      <div className="group">
        <label htmlFor="username">Username</label>
        <input onChange={usernameHandler} type="text" name="username-input" id="usernameInput" value={username} />
      </div>
      <div className="group">
        <label htmlFor="age">Age (Years)</label>
        <input onChange={ageHandler} type="number" name="age-input" id="ageInput" value={age} />
      </div>
      <Button type='submit'>Add User</Button>
  </form>;
};

export default UserForm;
