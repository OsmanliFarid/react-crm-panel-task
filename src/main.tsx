import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "../public/css/App.css";
import GlobalProvider from "./ContextStore/GlobalContext.tsx";
import { store } from "./Components/GlobalStore/store.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </GlobalProvider>
  </StrictMode>
);
