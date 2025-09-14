import "react";
import { useAuth } from "../context/AuthContext";
import { Button, Card, Input, Label } from "../ui";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: var(--muted);
`;

const Form = styled.div`
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const Field = styled.div`
  margin-bottom: 1rem;
`;

const LoginPage = () => {
  const { login } = useAuth();

  const handleLogin = (role) => {
    login(role);
  };

  return (
    <Wrapper>
      <Card>
        <Form>
          <Title>Login</Title>

          <Field>
            <Label>Email</Label>
            <Input type="email" placeholder="Enter your email" />
          </Field>

          <Field>
            <Label>Password</Label>
            <Input type="password" placeholder="Enter your password" />
          </Field>

          <Field>
            <p>Select a role (for demo):</p>
            <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
              <Button onClick={() => handleLogin("admin")}>Admin</Button>
              <Button onClick={() => handleLogin("forwarder")}>Forwarder</Button>
              <Button onClick={() => handleLogin("shipper")}>Shipper</Button>
            </div>
          </Field>
        </Form>
      </Card>
    </Wrapper>
  );
};

export default LoginPage;