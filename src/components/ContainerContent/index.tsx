import React from "react";
import styled from "styled-components";

const ContainerContent = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  background-color: #fbf8cb;
  height: 75vh;
  width: 100%;
  margin: 20px;
  padding: 20px;

  @media (max-width: 820px) {
    width: 90%;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 80%;
  }
`;

export default ContainerContent;
