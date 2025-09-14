import "react";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ appContent }) => {
  // ⚡ Mocked auth — later replace with AWS Cognito integration
  const [user, setUser] = useState({
    id: "user-001",
    role: "admin", // change for testing: "operations", "customer"
    name: "Demo User",
  });

  const login = (role = "customer") => setUser({ id: "user-001", role, name: "Demo User" });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {appContent}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};