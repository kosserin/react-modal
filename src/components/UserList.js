import React from 'react';
import User from './User';

import styles from './UserList.module.css'

const UserList = (props) => {
  return <div className={styles['user-list']}>
    {props.users.map(user => (
        <User name={user.name} key={user.id} id={user.id} age={user.age} onDeleteUser={props.onDeleteUser} />
    ))}
  </div>;
};

export default UserList;
