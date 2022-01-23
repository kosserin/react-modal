import React from 'react';

import styles from './User.module.css'

const User = (props) => {

  const deleteHandler = e => {
    props.onDeleteUser(e.target.id)
  }

  return <div id={props.id} onClick={deleteHandler} className={styles['user']}>
      <p>{props.name + ', ' + props.age}</p>
  </div>;
};

export default User;
