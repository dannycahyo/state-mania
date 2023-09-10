import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { ReduxProvider } from "@stores/redux";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ReduxProvider>
  </React.StrictMode>,
);
