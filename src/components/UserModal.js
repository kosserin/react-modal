import React from 'react';

import styles from './UserModal.module.css'

const UserModal = (props) => {

  const closeHandler = e => {
    props.onCheckShowModal(false)
  }

  const modalHandler = e => {
    console.log(e.target.className === "UserModal_user-modal__k9o6X")
    if(e.target.className === "UserModal_user-modal__k9o6X"){
      props.onCheckShowModal(false)
    }
  }

  return <div onClick={modalHandler} className={styles['user-modal']}>
      <div>
          <h1>Invalid Input</h1>
          <p>{props.modalText}</p>
          <button onClick={closeHandler}>Okay</button>
      </div>
  </div>;
};

export default UserModal;
