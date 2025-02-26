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
`;

export default Resume;
