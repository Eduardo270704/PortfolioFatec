import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { Category, Title } from "..";
import { LanguageContext } from "../../context";
import { useTranslation } from "../../hooks";

const MyHeader = () => {
  const location = useLocation();
  const { language, setLanguage } = useContext(LanguageContext)!;
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
      <HamburgerMenu onClick={toggleMenu}>☰</HamburgerMenu>
      {menuOpen && (
        <MobileMenu open={menuOpen}>
          <StyledLink to="/" onClick={() => setMenuOpen(false)}>
            <Category selected={location.pathname === "/"}>
              {t("resume")}
            </Category>
          </StyledLink>
          <StyledLink to="/projects" onClick={() => setMenuOpen(false)}>
            <Category selected={location.pathname === "/projects"}>
              {t("projects")}
            </Category>
          </StyledLink>
          <StyledLink to="/contact" onClick={() => setMenuOpen(false)}>
            <Category selected={location.pathname === "/contact"}>
              {t("contact")}
            </Category>
          </StyledLink>
          <LanguageSelector
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value as "en" | "pt" | "es");
            }}
          >
            <option value="en">🇬🇧 EN</option>
            <option value="pt">🇧🇷 PT</option>
            <option value="es">🇪🇸 ES</option>
          </LanguageSelector>
        </MobileMenu>
      )}
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
  position: relative;

  @media (max-width: 430px) {
    padding: 0 20px;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 480px) {
    width: 40%;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 45%;
  height: 100%;

  @media (max-width: 820px) {
    display: none;
  }

  @media (max-width: 430px) {
    gap: 25px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  height: 100%;

  @media (max-width: 820px) {
    width: 100%;
    height: 40px;
  }
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

  @media (max-width: 820px) {
    margin-left: auto;
    margin-right: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  font-size: 30px;
  cursor: pointer;

  @media (max-width: 820px) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 80px;
  right: 0;
  background-color: #fdf9cc;
  width: 100%;
  border: 2px solid #5a584c;
  border-radius: 5px;
  transform: translateY(-100%);
  opacity: 0;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  padding-left: 20px;
  align-items: flex-start;
  justify-content: flex-start;

  ${({ open }) =>
    open &&
    `
    transform: translateY(0);
    opacity: 1;
    z-index: 5;
  `}
`;

export default MyHeader;
