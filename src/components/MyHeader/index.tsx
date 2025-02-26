import React, { useContext } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { Category, Title } from "..";
import { LanguageContext } from "../../context";
import { useTranslation } from "../../hooks";

const MyHeader = () => {
  const location = useLocation();
  const { language, setLanguage } = useContext(LanguageContext)!;
  const { t } = useTranslation();

  return (
    <Container>
      <Left>
        <Title />
      </Left>
      <Right>
        <LanguageSelector
          value={language}
          onChange={(e) => setLanguage(e.target.value as "en" | "pt" | "es")}
        >
          <option value="en">🇬🇧 EN</option>
          <option value="pt">🇧🇷 PT</option>
          <option value="es">🇪🇸 ES</option>
        </LanguageSelector>
        <StyledLink to="/">
          <Category selected={location.pathname === "/"}>
            {t("resume")}
          </Category>
        </StyledLink>
        <StyledLink to="/projects">
          <Category selected={location.pathname === "/projects"}>
            {t("projects")}
          </Category>
        </StyledLink>
        <StyledLink to="/contact">
          <Category selected={location.pathname === "/contact"}>
            {t("contact")}
          </Category>
        </StyledLink>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  margin: 0;
  height: 80px;
  border-bottom: solid 3.5px #5a584c;
  background-color: #fdf9cc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 45%;
  height: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  height: 100%;
`;

const LanguageSelector = styled.select`
  font-size: 16px;
  padding: 5px;
  border: 2px solid #5a584c;
  border-radius: 5px;
  background-color: #fdf9cc;
  color: #5a584c;
  cursor: pointer;
  outline: none;
`;

export default MyHeader;
