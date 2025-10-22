import { createContext, useState } from "react";

export const GlobalContext = createContext<any>(null);

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [ActiveSubmit, SetActiveSubmit] = useState(true);

  return (
    <GlobalContext.Provider value={{ ActiveSubmit, SetActiveSubmit }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
