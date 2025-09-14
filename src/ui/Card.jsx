import "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--card);
  color: var(--card-foreground);
  padding: 1rem;
  margin-bottom: 1rem;
`;

const Header = styled.div`
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border);
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
`;

const Content = styled.div`
  padding-top: 0.5rem;
`;

export const Card = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export const CardHeader = ({ children }) => {
  return <Header>{children}</Header>;
};

export const CardTitle = ({ children }) => {
  return <Title>{children}</Title>;
};

export const CardContent = ({ children }) => {
  return <Content>{children}</Content>;
};
