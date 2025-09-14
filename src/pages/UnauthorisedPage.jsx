import "react";
import { Button, Card } from "../ui";
import { useAuth } from "../context/AuthContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: var(--muted);
`;

const UnauthorisedPage = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Card>
        <h1>Unauthorized</h1>
        <p style={{ margin: "1rem 0" }}>
          You don’t have permission to view this page.
        </p>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Button onClick={() => navigate("/login")}>Go to Login</Button>
          <Button variant="secondary" onClick={logout}>
            Logout
          </Button>
        </div>
      </Card>
    </Wrapper>
  );
};

export default UnauthorisedPage;