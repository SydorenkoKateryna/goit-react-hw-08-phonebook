import PropTypes from 'prop-types';
import { Item, Name, Number, Button } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'store/contacts/operations';
import { RxCross1 } from 'react-icons/rx';

const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Name>{name}</Name>
      <Number>{number}</Number>
      <Button
        type="button"
        aria-label="delete a contact"
        onClick={() => dispatch(deleteContact(id))}
      >
        <RxCross1 size={20} />
      </Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
