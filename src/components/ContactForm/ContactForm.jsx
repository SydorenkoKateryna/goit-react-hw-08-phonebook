import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'store/contacts/selectors';
import { addContact } from 'store/contacts/operations';
import { Form, Label, Input, Span, Button } from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      setName('');
      return;
    }

    dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <Span>Name</Span>
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </Label>

      <Label>
      <Span>Number</Span>
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          disabled={!name}
          onChange={handleChange}
        />
      </Label>
      <Button type="submit" disabled={!name || !number}>
        Add contact
      </Button>
    </Form>
  );
};

export default ContactForm;
