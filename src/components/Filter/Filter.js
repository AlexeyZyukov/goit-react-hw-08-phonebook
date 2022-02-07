import { useSelector, useDispatch } from 'react-redux';
import * as contactsSelectors from '../../redux/contacts/contacts-selectors';
import * as contactsActions from '../../redux/contacts/contacts-actions';

export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <div className="filter-container">
      <p className="title-text">Find contacts by name</p>
      <input
        className="form__input"
        type="text"
        name="filter"
        value={value}
        onChange={e =>
          dispatch(contactsActions.filterContacts(e.currentTarget.value))
        }
      />
    </div>
  );
}
