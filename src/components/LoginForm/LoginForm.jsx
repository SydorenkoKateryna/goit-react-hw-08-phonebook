import { useDispatch } from 'react-redux';
import { logIn } from 'store/auth/operations';
import { Form, Label, Input, Span, Button } from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
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
      <Button type="submit">Log in</Button>
    </Form>
  );
};

export default LoginForm;
