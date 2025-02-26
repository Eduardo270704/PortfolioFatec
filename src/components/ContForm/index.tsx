import React, { useState } from "react";
import styled from "styled-components";
import { ContainerContent } from "..";
import { useTranslation } from "../../hooks";

const ContForm = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:eduardo.moraes.profissional@gmail.com?subject=Contato de ${
      form.name
    }&body=${encodeURIComponent(
      `Nome: ${form.name}\nEmail: ${form.email}\n\nMensagem:\n${form.message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <ContainerContent>
      <ContentCenter>
        <HW>{t("sendMail")}</HW>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder={t("yourName")}
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder={t("yourEmail")}
            value={form.email}
            onChange={handleChange}
            required
          />
          <TextArea
            name="message"
            placeholder={t("yourMessage")}
            value={form.message}
            onChange={handleChange}
            required
          />
          <Button type="submit">{t("sendButton")}</Button>{" "}
        </Form>
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
  width: 100%;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
  border: 3px solid #5a584c;
  border-radius: 5px;
  font-family: "Montserrat", serif;
  background-color: #fffce5;
  font-weight: 400;
`;

const TextArea = styled.textarea`
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
  border: 3px solid #5a584c;
  height: 100px;
  resize: none;
  font-family: "Montserrat", serif;
  background-color: #fffce5;
  font-weight: 400;
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

export default ContForm;
