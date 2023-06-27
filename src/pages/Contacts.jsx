import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'store/contacts/operations';
import { selectContacts, selectIsLoading, selectError } from 'store/contacts/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    //     <div
    //     style={{
    //       width: '400px',
    //       marginLeft: 'auto',
    //       marginRight: 'auto',
    //       padding: '20px',
    //       display: 'flex',
    //       flexDirection: 'column',
    //       alignItems: 'left',
    //       gap: '20px',
    //       borderRadius: '5px',
    //       fontSize: '16px',
    //       color: '#010101',
    //       backgroundColor: '#ffffff',
    //       boxShadow:
    //         '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2)',
    //     }}
    //   >
    <main>
      <h1>Phonebook</h1>
      <ContactForm />

      {isLoading && !error && <b>Loading...</b>}

      {!isLoading && !error && (
        <>
          <h2>Contacts</h2>
          <Filter />
          {contacts.length > 0 && <ContactList />}
        </>
      )}
    </main>
    //   </div>
  );
};

export default Contacts;
