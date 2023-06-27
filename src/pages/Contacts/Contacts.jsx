import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'store/contacts/operations';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'store/contacts/selectors';
import Loader from 'components/Loader';
import { FormWrapper, ContactListWrapper } from './Contacts.styled';
import { RiContactsBookFill } from 'react-icons/ri';
import { BsPersonAdd } from 'react-icons/bs';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <FormWrapper>
        <BsPersonAdd size={40} />
        <ContactForm />
      </FormWrapper>

      <ContactListWrapper>
        {isLoading && !error && <Loader />}

        {!isLoading && !error && (
          <>
            <RiContactsBookFill size={40} />

            <Filter />

            {contacts.length > 0 && <ContactList />}
          </>
        )}
      </ContactListWrapper>
    </main>
  );
};

export default Contacts;
