import React from "react";
import { ContainerContent } from "..";
import styled from "styled-components";
import { useTranslation } from "../../hooks";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <ContainerContent>
      <ContentCenter>
        <Sld>
          <Knowledges>{t("skillsTitle")}</Knowledges>
          <FirstLine>
            <Info>{t("eduardoName")}</Info>
            <Info>{t("yearsOfCoding")}</Info>
          </FirstLine>
          <HorizontalRule />
          <Line>
            <Info>{t("course")}</Info>
            <Info>{t("courseName")}</Info>
          </Line>
          <Line>
            <Info>{t("college")}</Info>
            <Info>{t("collegeName")}</Info>
          </Line>
          <Line>
            <Info>{t("conclusion")}</Info>
            <Info>{t("conclusionDate")}</Info>
          </Line>
          <HorizontalRule />
          <ScrollContainer>
            <KnowledgesContainer>
              <Line>
                <Info>{t("knowledges")}</Info>
              </Line>
              <LineItems>
                <Item>- {t("react")}</Item>
                <Item>- {t("reactNative")}</Item>
              </LineItems>
              <LineItems>
                <Item>- {t("typescript")}</Item>
                <Item>- {t("javascript")}</Item>
              </LineItems>
              <LineItems>
                <Item>- {t("html")}</Item>
                <Item>- {t("css")}</Item>
              </LineItems>
              <LineItems>
                <Item>- {t("cpp")}</Item>
                <Item>- {t("arduino")}</Item>
              </LineItems>
            </KnowledgesContainer>
            <HorizontalRuleKnowledge />
            <KnowledgesContainer>
              <Line>{t("languages")}</Line>
              <LineItems>
                <Item>- {t("portuguese")}</Item>
                <Item>- {t("english")}</Item>
              </LineItems>
              <LineItems>
                <Item>- {t("spanish")}</Item>
              </LineItems>
            </KnowledgesContainer>
            <HorizontalRuleKnowledge />
            <KnowledgesContainer>
              <Line>{t("softSkills")}</Line>
              <LineItems>
                <Item>- {t("creativity")}</Item>
                <Item>- {t("organized")}</Item>
              </LineItems>
              <LineItems>
                <Item>- {t("leadership")}</Item>
                <Item>- {t("initiative")}</Item>
              </LineItems>
              <LineItems>
                <Item>- {t("workUnderPressure")}</Item>
                <Item>- {t("dedication")}</Item>
              </LineItems>
              <LineItems>
                <Item>- {t("problemSolving")}</Item>
              </LineItems>
            </KnowledgesContainer>
          </ScrollContainer>
        </Sld>
      </ContentCenter>
    </ContainerContent>
  );
};

const ContentCenter = styled.div`
  width: 100%;
`;

const Sld = styled.div`
  font-family: "Montserrat", serif;
  font-size: 18px;
`;

const Knowledges = styled.div`
  background-color: #504d3e;
  margin: -20px;
  padding: 20px;
  color: #efe9cc;
  font-weight: 550;
`;

const FirstLine = styled.div`
  display: Flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const Info = styled.div`
  font-weight: 400;
`;

const HorizontalRule = styled.hr`
  height: 3px;
  border: 0;
  width: 100%;
  background-color: #e3dbb2;
`;

const HorizontalRuleKnowledge = styled.hr`
  height: 3px;
  border: 0;
  margin-left: 0;
  margin-right: 0;
  width: 90%;
  background-color: #e3dbb2;
`;

const Line = styled.div`
  display: Flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ScrollContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
  margin-bottom: -20px;
  margin-top: 0px;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #ddd;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #504d3e;
    border-radius: 8px;
  }
`;

const KnowledgesContainer = styled.div`
  width: 90%;
`;

const LineItems = styled.div`
  display: Flex;
  justify-content: space-between;
  width: 100%;
`;

const Item = styled.ul`
  font-weight: 400;
`;

export default Skills;
