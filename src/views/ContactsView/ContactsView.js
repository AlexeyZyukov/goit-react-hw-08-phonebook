import { useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import Form from '../../components/Form/Form';
import Filter from '../../components/Filter/Filter';
import styles from './contactsView.module.css';
import Container from '../../components/Container/Container';

function Contacts() {
  const contacts = useSelector(contactsSelectors.filterContacts);
  const dispatch = useDispatch();
  const onDelete = id => dispatch(contactsOperations.delContact(id));

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <Container>
      <Form />
      <Filter />
      <ul className={styles.contactList}>
        {contacts.map(({ id, name, number }) => {
          return (
            <li className={styles.contactListItem} key={id}>
              <p>{name}</p>
              <p>{number}</p>
              <button className="button" id={id} onClick={() => onDelete(id)}>
                Delete contact
              </button>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});
export default connect(null, mapDispatchToProps)(Contacts);
