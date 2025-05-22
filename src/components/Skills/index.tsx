import React from "react";
import { ContainerContent } from "..";
import styled from "styled-components";
import { useTranslation } from "../../hooks";

const Skills = () => {
  const { t } = useTranslation();

  const dashText = (text: string) => `-\u00A0${text}`;

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
                <Item>{dashText(t("react"))}</Item>
                <Item>{dashText(t("reactNative"))}</Item>
              </LineItems>
              <LineItems>
                <Item>{dashText(t("typescript"))}</Item>
                <Item>{dashText(t("javascript"))}</Item>
              </LineItems>
              <LineItems>
                <Item>{dashText(t("html"))}</Item>
                <Item>{dashText(t("css"))}</Item>
              </LineItems>
              <LineItems>
                <Item>{dashText(t("cpp"))}</Item>
                <Item>{dashText(t("arduino"))}</Item>
              </LineItems>
            </KnowledgesContainer>
            <HorizontalRuleKnowledge />
            <KnowledgesContainer>
              <Line>{t("languages")}</Line>
              <LineItems>
                <Item>{dashText(t("portuguese"))}</Item>
                <Item>{dashText(t("english"))}</Item>
              </LineItems>
              <LineItems>
                <Item>{dashText(t("spanish"))}</Item>
              </LineItems>
            </KnowledgesContainer>
            <HorizontalRuleKnowledge />
            <KnowledgesContainer>
              <Line>{t("softSkills")}</Line>
              <LineItems>
                <Item>{dashText(t("creativity"))}</Item>
                <Item>{dashText(t("organized"))}</Item>
              </LineItems>
              <LineItems>
                <Item>{dashText(t("leadership"))}</Item>
                <Item>{dashText(t("initiative"))}</Item>
              </LineItems>
              <LineItems>
                <Item>{dashText(t("workUnderPressure"))}</Item>
                <Item>{dashText(t("dedication"))}</Item>
              </LineItems>
              <LineItems>
                <Item>{dashText(t("problemSolving"))}</Item>
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

  @media (max-width: 820px) {
    flex: 1;
  }
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
  height: 390px;
  overflow-y: auto;
  margin-bottom: 40px;
  margin-top: 0px;
  padding-bottom: -24px;

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

  @media (max-width: 820px) {
    max-height: none;
    margin-bottom: 20px;
  }
`;

const KnowledgesContainer = styled.div`
  width: 90%;
  padding-bottom: 30px;
`;

const LineItems = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 12px;
  padding-left: 12px;

  @media (max-width: 398px) {
    width: 110%;
  }
`;

const Item = styled.div`
  font-weight: 400;
  list-style: none;

  @media (max-width: 480px) {
    width: 50%;
  }
`;

export default Skills;
