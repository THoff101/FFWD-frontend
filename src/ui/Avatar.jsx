import "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import styled from "styled-components";

const Root = styled(AvatarPrimitive.Root)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  background: var(--muted);
  color: var(--muted-foreground);
  width: ${({ size }) => size || "40px"};
  height: ${({ size }) => size || "40px"};
`;

const Img = styled(AvatarPrimitive.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Fallback = styled(AvatarPrimitive.Fallback)`
  font-weight: 500;
`;

export const Avatar = ({ src, alt, size }) => (
  <Root size={size}>
    {src ? <Img src={src} alt={alt} /> : <Fallback>{alt?.[0] || "?"}</Fallback>}
  </Root>
);

