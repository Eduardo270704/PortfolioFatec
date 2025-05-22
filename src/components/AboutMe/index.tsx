import React from "react";
import { ContainerContent } from "..";
import { perfil } from "../../assets";
import styled from "styled-components";
import { useTranslation } from "../../hooks";
import { Link } from "react-router-dom";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <ContainerContent>
      <Wrapper>
        <ContentCenter>
          <Photo src={perfil} />
          <HorizontalRule />
        </ContentCenter>
        <Text>{t("aboutMeText")}</Text>
        <Buttons>
          <StyledLink to="/projects">
            <Button>{t("projectsBtn")}</Button>
          </StyledLink>
          <StyledLink to="/contact">
            <Button>{t("contactBtn")}</Button>
          </StyledLink>
        </Buttons>
      </Wrapper>
    </ContainerContent>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
`;

const ContentCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Photo = styled.img`
  width: 60%;
  display: block;
  margin: 0 auto;
  border: #5a584c solid 3px;
`;

const HorizontalRule = styled.hr`
  height: 3px;
  border: 0;
  width: 100%;
  background-color: #e3dbb2;
`;

const Text = styled.div`
  font-family: "Montserrat", serif;
  font-size: 18px;
  text-align: justify;
  font-weight: 400;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  height: 100%;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 15px;
  }
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

export default AboutMe;
