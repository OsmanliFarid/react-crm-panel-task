import { createContext, useState } from "react";

export const GlobalContext = createContext<any>(null);

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [ActiveSubmit, SetActiveSubmit] = useState(true);
  const [SearchText, SetSearchText] = useState("");
  const [WeatherData, SetWeatherData] = useState(null);

  return (
    <GlobalContext.Provider
      value={{
        ActiveSubmit,
        SetActiveSubmit,
        SearchText,
        SetSearchText,
        WeatherData,
        SetWeatherData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
