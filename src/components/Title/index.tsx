import React from "react";
import styled from "styled-components";

const Title = () => {
  return (
    <GlitchWrapper>
      <Sld data-text="Eduardo Moraes">Eduardo Moraes</Sld>
    </GlitchWrapper>
  );
};

const Sld = styled.div`
  position: relative;
  font-size: 26px;
  font-family: "RodinProEB", sans-serif;
  font-weight: 300;
  letter-spacing: 5px;
  line-height: 1.2;
  color: #504d3e;
  z-index: 1;

  &:before,
  &:after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.4;
  }

  &:after {
    color: #afa992;
    z-index: -2;
    transform: translate(5px, 5px);
  }
`;

const GlitchWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  z-index: 1;
`;

export default Title;
