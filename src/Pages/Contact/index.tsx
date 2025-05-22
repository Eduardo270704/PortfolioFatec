import React, { useState } from "react";
import styled from "styled-components";
import { ContAlt, ContForm } from "../../components";

const Contact = () => {
  return (
    <Content>
      <ContAlt />
      <ContForm />
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

export default Contact;
