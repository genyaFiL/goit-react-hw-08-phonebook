import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getContacts, getFilter } from 'redux/selectors';

import css from './FilterStyles.module.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const onChange = e => {
    // console.log('e.currentTarget.value: ', e.currentTarget.value);

    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <>
      <h2>Contacts</h2>
      <div className={css.container}>
        {contacts.length !== 0 && (
          <>
            <label htmlFor="inputFind">Find contacts by name</label>
            <input
              type="text"
              name="name"
              id="inputFind"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={onChange}
              value={value}
            />
          </>
        )}

        {/* {console.log('value input: ', value)} */}
      </div>
    </>
  );
}
