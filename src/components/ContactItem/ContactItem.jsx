import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'api/ContactsAPI';
import styles from './ContactItem.module.css';

const ContactItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(
    state => state.contacts.contacts[id]?.isLoading
  );

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.item}>
      <span className={styles.text}>
        {name} : {phone}
      </span>
      <button
        type="button"
        disabled={isLoading ? true : false}
        onClick={() => handleDelete(id)}
      >
        {isLoading ? <p>Loading...</p> : 'delete'}
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
