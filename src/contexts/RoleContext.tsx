import React, { createContext, useContext, useState, ReactNode } from "react";

export type UserRole = "student" | "alumni" | "faculty" | "club_admin" | "college_admin";

interface RoleContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  roleName: string;
}

const roleNames: Record<UserRole, string> = {
  student: "Student",
  alumni: "Alumni",
  faculty: "Faculty",
  club_admin: "Club Admin",
  college_admin: "College Admin",
};

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export function RoleProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<UserRole>("student");

  return (
    <RoleContext.Provider value={{ role, setRole, roleName: roleNames[role] }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  const context = useContext(RoleContext);
  if (!context) throw new Error("useRole must be used within RoleProvider");
  return context;
}

export { roleNames };
