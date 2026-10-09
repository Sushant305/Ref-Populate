import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserPostContextProvider } from "./context/userPostContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserPostContextProvider>
      <App />
    </UserPostContextProvider>
  </StrictMode>,
);
