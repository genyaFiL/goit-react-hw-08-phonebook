import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getContacts, getFilter } from 'redux/selectors';
import { fetchContacts } from 'api/ContactsAPI';
import ContactItem from 'components/ContactItem/ContactItem';

export default function ContactList() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);
  const { filter } = useSelector(getFilter);

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    const normalizedFilter = filter.toString().toLowerCase();
    setContacts(
      items.filter(
        ({ name, number }) =>
          name.toLowerCase().includes(normalizedFilter) ||
          number.includes(normalizedFilter)
      )
    );
  }, [filter, items]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        contacts.map(({ name, number: phone, id }, index) => (
          <ContactItem name={name} phone={phone} id={id} key={index} />
        ))
      )}
      {error && <p>Something went wrong. An error has occurred: {error}</p>}
    </div>
  );
}
