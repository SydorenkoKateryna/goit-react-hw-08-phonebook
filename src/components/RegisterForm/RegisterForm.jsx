import { useDispatch } from 'react-redux';
import { signUp } from 'store/auth/operations';
import { Form, Label } from './RegisterForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      signUp({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Name
        <input type="text" name="name" required />
      </Label>
      <Label>
        Email
        <input type="email" name="email" required />
      </Label>
      <Label>
        Password
        <input type="password" name="password" required />
      </Label>
      <button type="submit">Sign up</button>
    </Form>
  );
};

export default RegisterForm;
