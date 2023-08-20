import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getContacts } from 'redux/selectors';

import css from './FilterStyles.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const { items } = useSelector(getContacts);

  const onChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <>
      <div className={css.container}>
        {items.length !== 0 && (
          <>
            <h2>Contacts</h2>
            <label className={css.label} htmlFor="inputFind">
              Find contacts by name
            </label>
            <input
              className={css.input}
              placeholder="Search name"
              type="text"
              name="name"
              id="inputFind"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={onChange}
            />
          </>
        )}
      </div>
    </>
  );
}
