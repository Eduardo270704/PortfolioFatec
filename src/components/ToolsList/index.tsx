import React from "react";
import styled from "styled-components";
import { ContainerContent } from "..";
import { useTranslation } from "../../hooks";

interface ToolsListProps {
  tools: string[];
  myFunction: string;
}

const ToolsList: React.FC<ToolsListProps> = ({ tools, myFunction }) => {
  const { t } = useTranslation();

  return (
    <ContainerContent>
      <HW>{t("myJob")}</HW>
      <ToolsListContainer>
        <Description>{myFunction}</Description>
        <HorizontalRule />
        <Text>{t("toolsUsed")}</Text>
        {tools.map((tool, index) => (
          <ToolItem key={index}>{tool}</ToolItem>
        ))}
      </ToolsListContainer>
    </ContainerContent>
  );
};

const HW = styled.div`
  background-color: #504d3e;
  margin: -20px;
  padding: 20px;
  color: #efe9cc;
  font-weight: 550;
  font-family: "Montserrat", serif;
  font-size: 26px;
  letter-spacing: 5px;
  text-align: left;
  z-index: 1;
  position: relative;
`;

const Description = styled.div`
  text-align: justify;
  font-family: "Montserrat", serif;
  font-weight: 400;
  margin-top: 0px;
  width: 90%;
`;

const Text = styled.div`
  display: block;
  text-align: justify;
  font-family: "Montserrat", serif;
  font-weight: 400;
  width: 100%;
`;

const HorizontalRule = styled.hr`
  height: 3px;
  border: 0;
  width: 90%;
  background-color: #e3dbb2;
  margin-left: 0;
`;

const ToolsListContainer = styled.ul`
  list-style-type: none;
  padding: 10px 0px;
  margin: 20px 0;
  max-height: 90%;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
`;

const ToolItem = styled.li`
  font-family: "Montserrat", serif;
  font-size: 18px;
  color: #504d3e;
  background-color: #e3dbb2;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  width: 40%;
  &:hover {
    background-color: #504d3e;
    color: #efe9cc;
  }
`;

export default ToolsList;
