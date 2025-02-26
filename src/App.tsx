import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { MyHeader } from "./components";
import { Contact, Projects, Resume } from "./Pages";
import { fonts } from "./assets";
import { LanguageProvider } from "./context";

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <GlobalStyle />
        <MyHeader />
        <Routes>
          <Route path="/" element={<Resume />} />
          <Route path="/resume" element={<Navigate to="/" replace />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f1ecc6;
    margin: 0;
  }

  @font-face {
    font-family: "RodinProEB";
    src: url(${fonts.RodinProEB}) format("opentype");
    font-weight: normal;
    font-style: normal;
  }
`;

export default App;
