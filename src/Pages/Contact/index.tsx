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
`;

export default Contact;
