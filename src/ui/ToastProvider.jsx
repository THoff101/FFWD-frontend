import "react";
import { createContext, useContext, useState, useCallback } from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import styled from "styled-components";

const ToastContext = createContext(null);

const Viewport = styled(ToastPrimitive.Viewport)`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 320px;
  z-index: 9999;
`;

const Root = styled(ToastPrimitive.Root)`
  background: var(--card);
  color: var(--card-foreground);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled(ToastPrimitive.Title)`
  font-weight: 600;
`;

const Description = styled(ToastPrimitive.Description)`
  font-size: 0.875rem;
  color: var(--muted-foreground);
  margin-top: 0.25rem;
`;

const Close = styled(ToastPrimitive.Close)`
  border: none;
  background: transparent;
  cursor: pointer;
  margin-left: 0.5rem;
`;

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((title, description) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, title, description }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 4000); // auto-dismiss after 4s
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      <ToastPrimitive.Provider>
        {children}
        {toasts.map((toast) => (
          <Root key={toast.id} open>
            <div>
              <Title>{toast.title}</Title>
              {toast.description && (
                <Description>{toast.description}</Description>
              )}
            </div>
            <Close aria-label="Close">✖</Close>
          </Root>
        ))}
        <Viewport />
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
};