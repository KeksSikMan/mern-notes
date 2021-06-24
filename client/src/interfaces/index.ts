import { ReactNode } from "react";

// Header


// Nullable
export type Nullable<T> = null | T;

// Icon
export type TIcon = {
  icon: string;
};

// NavBar
export type TNavBar = {
  children: ReactNode;
};

export type TNavItem = {
  children: ReactNode;
  icon: ReactNode;
};
