import React from "react";
import { ContainerContent } from "..";
import styled from "styled-components";
import { useTranslation } from "../../hooks";

const ContAlt = () => {
  const { t } = useTranslation();

  return (
    <ContainerContent>
      <ContentCenter>
        <HW>{t("contactTitle")}</HW>
        <Text>{t("contactDescription")}</Text>
        <HorizontalRule />
        <Line>
          <Text>{t("email")}</Text>
        </Line>
        <Line>
          <LinkedIn
            href="https://www.linkedin.com/in/eduardo-moraes-339699285/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("linkedIn")}
          </LinkedIn>
        </Line>
      </ContentCenter>
    </ContainerContent>
  );
};

const ContentCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  padding: 20px;
`;

const HW = styled.div`
  font-size: 26px;
  font-family: "RodinProEB", sans-serif;
  font-weight: 300;
  letter-spacing: 5px;
  color: #504d3e;
  line-height: 1.2;
  position: relative;
`;

const Text = styled.div`
  font-family: "Montserrat", serif;
  font-size: 18px;
  align-items: center;
  font-weight: 400;

  @media (max-width: 398px) {
    word-break: break-word;
  }
`;

const LinkedIn = styled.a`
  font-family: "Montserrat", serif;
  font-size: 18px;
  text-align: center;
  color: #504d3e;
  opacity: 1;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
  font-weight: 400;

  &:visited {
    color: #504d3e;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const HorizontalRule = styled.hr`
  height: 3px;
  border: 0;
  width: 100%;
  background-color: #e3dbb2;
`;

const Line = styled.div`
  justify-content: space-between;
  margin-top: 20px;
`;

export default ContAlt;
