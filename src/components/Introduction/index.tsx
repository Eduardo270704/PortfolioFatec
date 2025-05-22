import React, { useState, useEffect, useContext } from "react";
import { ContainerContent } from "..";
import styled from "styled-components";
import { LanguageContext } from "../../context";
import { translations } from "../../translate";

const Introduction = () => {
  const { language } = useContext(LanguageContext)!;
  const [text, setText] = useState("");
  const [subText, setSubText] = useState("");

  const fullText = translations[language].hello;
  const fullSubText = translations[language].name;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
        let subIndex = 0;
        const subInterval = setInterval(() => {
          setSubText(fullSubText.slice(0, subIndex + 1));
          subIndex++;
          if (subIndex === fullSubText.length) clearInterval(subInterval);
        }, 100);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [language]);

  return (
    <ContainerContent>
      <ContentCenter>
        <HW>{text}</HW>
        <Text>{subText}</Text>
      </ContentCenter>
    </ContainerContent>
  );
};

const ContentCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
`;

const HW = styled.div`
  font-size: 26px;
  font-family: "RodinProEB", sans-serif;
  font-weight: 300;
  letter-spacing: 5px;
  color: #504d3e;
  line-height: 1.2;
  z-index: 1;
  position: relative;
`;

const Text = styled.div`
  font-family: "Montserrat", serif;
  font-size: 18px;
`;

export default Introduction;
