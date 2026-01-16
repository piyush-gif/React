import { createContext, useContext, useState } from "react";

const CountContext = createContext();

export const CountProvider = ({ childern }) => {
  const [navCount, setNavCount] = useContext(0);
};
