import styled from 'styled-components';
import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from '../contexts/theme-context';

const ToggleButton = styled(Button)`
  background-color: var(--secondary);
  border: 1px solid var(--border);
  color: var(--secondary-foreground);
  border-radius: 50%;
  width: clamp(2.25rem, 6vw, 2.5rem);
  height: clamp(2.25rem, 6vw, 2.5rem);
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    background-color: var(--muted);
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

const IconContainer = styled.div`
  position: relative;
  width: clamp(1rem, 3vw, 1.25rem);
  height: clamp(1rem, 3vw, 1.25rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSun = styled(Sun)`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  transform: ${props => props.$visible ? 'rotate(0deg) scale(1)' : 'rotate(90deg) scale(0)'};
  opacity: ${props => props.$visible ? 1 : 0};
  color: #f59e0b;
`;

const StyledMoon = styled(Moon)`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  transform: ${props => props.$visible ? 'rotate(0deg) scale(1)' : 'rotate(-90deg) scale(0)'};
  opacity: ${props => props.$visible ? 1 : 0};
  color: #6366f1;
`;

export function ThemeToggle({ className, ...props }) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <ToggleButton
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className={className}
      title={`Switch to ${isLight ? 'dark' : 'light'} mode`}
      {...props}
    >
      <IconContainer>
        <StyledSun $visible={isLight} />
        <StyledMoon $visible={!isLight} />
      </IconContainer>
    </ToggleButton>
  );
}