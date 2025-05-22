import React, { useState } from "react";
import {
  ContainerContent,
  ProjectDetails,
  ProjectList,
  ToolsList,
} from "../../components";
import styled from "styled-components";
import { bikepass, nutriperry, SIDA, visionaDashboard } from "../../assets";
import { useTranslation } from "../../hooks";

const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      name: t("agileDevelopmentTitle"),
      gif: SIDA,
      description: t("agileDevelopmentDescription"),
      repository: "https://github.com/ThePerryDev/Web.git",
      myFunction: t("agileDevelopmentMyFunction"),
      tools: [
        "Figma",
        "Notion",
        "GitHub",
        "JavaScript",
        "HTML5",
        "CSS3",
        "VS Code",
        "Microsoft Teams",
        "Microsoft Excel",
        "Microsoft Word",
        "Bootstrap",
      ],
    },
    {
      id: 2,
      name: "BikePass",
      gif: bikepass,
      description: t("bikePassDescription"),
      repository: "https://github.com/ThePerryDev/bikepass-documentation",
      myFunction: t("bikePassMyFunction"),
      tools: [
        "Figma",
        "Github",
        "TypeScript",
        "HTML5",
        "CSS3",
        "React",
        "Node.js",
        "PostgreSQL",
        "VS Code",
        "Microsoft Teams",
        "Microsoft Word",
      ],
    },
    {
      id: 3,
      name: "Dashboard Visiona",
      description: t("dashboardVisionaDescription"),
      myFunction: t("dashboardVisionaMyFunction"),
      repository: "https://github.com/ThePerryDev/bikepass-documentation",
      gif: visionaDashboard,
      tools: [
        "Figma",
        "GitHub",
        "TypeScript",
        "HTML5",
        "CSS3",
        "React",
        "Node.js",
        "PostgreSQL",
        "MongoDB",
        "VS Code",
        "Microsoft Teams",
        "Canva",
      ],
    },
    {
      id: 4,
      name: "NutriPerry",
      description: t("nutriPerryDescription"),
      myFunction: t("nutriPerryMyFunction"),
      repository: "https://github.com/ThePerryDev/NutriPerry",
      gif: nutriperry,
      tools: [
        "Figma",
        "GitHub",
        "TypeScript",
        "React Native",
        "MongoDB",
        "Expo Go",
        "Node.js",
        "StyleSheet",
        "VS Code",
        "Microsoft Teams",
        "Canva",
      ],
    },
  ];

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );

  return (
    <Content>
      <ProjectList
        projects={projects.slice().reverse()}
        onSelectProject={(project) => setSelectedProjectId(project.id)}
      />
      {selectedProject ? (
        <>
          <ProjectDetails project={selectedProject} />
          <ToolsList
            tools={selectedProject.tools || []}
            myFunction={selectedProject.myFunction || ""}
          />
        </>
      ) : (
        <>
          <ContainerContent>
            <Text>{t("selectProject")}</Text>
          </ContainerContent>
          <ContainerContent>
            <></>
          </ContainerContent>
        </>
      )}
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

const Text = styled.div`
  display: block;
  text-align: justify;
  font-family: "Montserrat", serif;
  font-weight: 400;
  width: 100%;
`;

export default Projects;
