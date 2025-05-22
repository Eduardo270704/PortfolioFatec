import React from "react";
import styled from "styled-components";
import { ContainerContent } from "..";
import { Link } from "react-router-dom";
import { useTranslation } from "../../hooks";

const ProjectDetails = ({ project }: any) => {
  const { t } = useTranslation();

  return (
    <ContainerContent>
      <HW>{project.name}</HW>
      <ContentCenter>
        <GifPresentation src={project.gif} loading="lazy" />
        <HorizontalRule />
        <DescriptionCenter>
          <Description>{project.description}</Description>
        </DescriptionCenter>
        <a href={project.repository} target="_blank" rel="noopener noreferrer">
          <Button>{t("viewOnGitHub")}</Button>
        </a>
      </ContentCenter>
    </ContainerContent>
  );
};

const ContentCenter = styled.div`
  list-style-type: none;
  padding: 10px 0px;
  margin: 20px 0;
  max-height: 90%;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const DescriptionCenter = styled.div`
  display: flex;
  width: 94%;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

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
  width: 100%;
`;

const Description = styled.p`
  width: 100%;
  text-align: justify;
  font-family: "Montserrat", serif;
  font-weight: 400;
`;

const HorizontalRule = styled.hr`
  height: 3px;
  border: 0;
  width: 98%;
  background-color: #e3dbb2;
  margin-top: 20px;
  position: relative;
`;

const GifPresentation = styled.img`
  width: 95%;
  border: #5a584c solid 3px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  height: 100%;
`;

const Button = styled.button`
  font-size: 26px;
  font-family: "RodinProEB", sans-serif;
  font-weight: 300;
  letter-spacing: 5px;
  line-height: 1.2;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  background-color: #e3dbb2;
  color: #504d3e;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #504d3e;
    color: #efe9cc;
    outline: #504d3e solid 3px;
    outline-offset: 3px;
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export default ProjectDetails;
