import ContactListItem from '../ContactListItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'store/selectors';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return <ContactListItem key={id} name={name} number={number} id={id} />;
      })}
    </ul>
  );
};

export default ContactList;
