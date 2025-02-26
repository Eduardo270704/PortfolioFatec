import React, { useState } from "react";
import styled from "styled-components";
import { ContainerContent } from "..";

interface Project {
  id: number;
  name: string;
  description: string;
}

interface ProjectListProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({
  projects,
  onSelectProject,
}) => {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );

  const handleProjectSelect = (project: Project) => {
    setSelectedProjectId(project.id);
    onSelectProject(project);
  };

  return (
    <ContainerContent>
      <ListContainer>
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            onClick={() => handleProjectSelect(project)}
            isSelected={selectedProjectId === project.id}
          >
            {project.name}
          </ProjectItem>
        ))}
      </ListContainer>
    </ContainerContent>
  );
};

const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ProjectItem = styled.li<{ isSelected: boolean }>`
  padding: 10px;
  margin: 10px 0;
  cursor: pointer;
  background-color: ${(props) =>
    props.isSelected
      ? "#504d3e"
      : "#e3dbb2"};
  color: ${(props) =>
    props.isSelected
      ? "#efe9cc"
      : "#504d3e"};
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-family: "Montserrat", serif;
  font-weight: 400;

  &:hover {
    background-color: #504d3e;
    color: #efe9cc;
    outline: #504d3e solid 3px;
    outline-offset: 3px;
  }
`;

export default ProjectList;
