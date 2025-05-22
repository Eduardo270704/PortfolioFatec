import React from "react";
import { AboutMe, Introduction, Skills } from "../../components";
import styled from "styled-components";

const Resume = () => {
  return (
    <Content>
      <Introduction />
      <AboutMe />
      <Skills />
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 820px) {
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  @media (max-width: 480px) {
    justify-content: center;
    align-items: center;
  }
`;

export default Resume;
