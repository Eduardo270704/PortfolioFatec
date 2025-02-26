import React from "react";
import styled from "styled-components";

const ContainerContent = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  background-color:#fbf8cb;
  height: 75vh;
  width: 100%;
  margin: 20px;
  padding: 20px;
`;

export default ContainerContent;
