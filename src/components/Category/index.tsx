import React, { useState } from "react";
import styled from "styled-components";

interface CategoryProps {
  children: React.ReactNode;
  selected: boolean;
}

const Category = ({ children, selected }: CategoryProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <GlitchWrapper
      selected={selected}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Sld selected={selected} hovered={hovered} data-text={String(children)}>
        {children}
      </Sld>
    </GlitchWrapper>
  );
};

const GlitchWrapper = styled.div<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? "#5a584c" : "transparent")};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "RodinProEB", sans-serif;
  font-size: 26px;
  text-align: center;
  height: 100%;
  transition: background-color 0.3s ease;
  padding: 0px 15px;

  &:hover {
    background-color: #5a584c;
  }

  @media (max-width: 820px) {
    justify-content: flex-start;
  }
`;

const Sld = styled.div<{ selected: boolean; hovered: boolean }>`
  position: relative;
  font-size: 26px;
  font-family: "RodinProEB", sans-serif;
  font-weight: 300;
  letter-spacing: 5px;
  line-height: 1.2;
  z-index: 1;
  color: ${({ selected, hovered }) =>
    selected || hovered ? "#efe9cc" : "#504d3e"};
  transition: color 0.3s ease;

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

export default Category;
