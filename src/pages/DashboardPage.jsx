import "react";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../ui";
import { Button, Card, Badge } from "../ui";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem;
  min-height: 100vh;
  background: var(--background);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const DashboardPage = () => {
  const { user, logout } = useAuth();
  const { showToast } = useToast();

  return (
    <Wrapper>
      <Header>
        <UserInfo>
          <h1>Welcome, {user?.name}</h1>
          <p>
            Role: <Badge>{user?.role}</Badge>
          </p>
        </UserInfo>
        <Button variant="secondary" onClick={logout}>
          Logout
        </Button>
      </Header>

      <Section>
        <Card>
          <h2>Quick Actions</h2>
          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <Button onClick={() => showToast("Job Created", "Your job has been added.")}>
              Create Job
            </Button>
            <Button onClick={() => showToast("Consolidation Started", "A new consolidation has been opened.")}>
              Start Consolidation
            </Button>
          </div>
        </Card>
      </Section>

      <Section>
        <Card>
          <h2>Role-based Example</h2>
          {user?.role === "admin" && <p>You can manage users and view all jobs.</p>}
          {user?.role === "forwarder" && <p>You can manage shipments and documents.</p>}
          {user?.role === "shipper" && <p>You can view your shipments and upload documents.</p>}
        </Card>
      </Section>
    </Wrapper>
  );
};

export default DashboardPage;