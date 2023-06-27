import { useDispatch } from 'react-redux';
import { signUp } from 'store/auth/operations';
import { Form, Label, Input, Span, Button } from './RegisterForm.styled';

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
        <Span>Name</Span>
        <Input type="text" name="name" placeholder="username" required />
      </Label>
      <Label>
        <Span>Email</Span>
        <Input
          type="email"
          name="email"
          placeholder="example@email.com"
          required
        />
      </Label>
      <Label>
        <Span>Password</Span>
        <Input
          type="password"
          name="password"
          minLength={8}
          placeholder="at least 8 characters"
          required
        />
      </Label>
      <Button type="submit">Sign up</Button>
    </Form>
  );
};

export default RegisterForm;
