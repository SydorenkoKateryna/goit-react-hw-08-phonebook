import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'store/contacts/operations';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'store/contacts/selectors';
import Loader from 'components/Loader';
import {
  AddNewContactWrapper,
  ContactListWrapper,
  Button,
} from './Contacts.styled';
import { BsPersonAdd } from 'react-icons/bs';
import Modal from 'components/Modal';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModal = () => {
    setIsShowModal(prevState => !prevState);
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <AddNewContactWrapper>
        <Button onClick={toggleModal}>
          <BsPersonAdd size={40} />
        </Button>
      </AddNewContactWrapper>

      {isShowModal && (
        <Modal onClose={toggleModal}>
          <ContactForm onClose={toggleModal} />
        </Modal>
      )}

      <ContactListWrapper>
        {isLoading && !error && <Loader />}

        {!isLoading && !error && (
          <>
            <Filter />
            {contacts.length > 0 && <ContactList />}
          </>
        )}
      </ContactListWrapper>
    </main>
  );
};

export default Contacts;
