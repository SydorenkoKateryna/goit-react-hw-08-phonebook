import ContactListItem from '../ContactListItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'store/contacts/selectors';
import { List } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return <ContactListItem key={id} name={name} number={number} id={id} />;
      })}
    </List>
  );
};

export default ContactList;
