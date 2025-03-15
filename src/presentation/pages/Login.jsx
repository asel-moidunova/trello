import { Button, Checkbox, TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <MainDiv>
      <ImgBg1 src="/assets/image/login-images/back.img1.png" alt="" />
      <RegistrDiv>
        <ImgLogo src="/assets/image/login-images/trello-logo.png" alt="" />
        <h3>Войдите, чтобы продолжить</h3>

        <TextField
          id="outlined-basic"
          label="Введите адрес электронной почты"
          variant="outlined"
          width="100%"
          height="20px"
          fullWidth
          sx={{ marginBottom: "10px",fontSize: "10px" }}
        />

        <RememberMe>
          <Checkbox />
          <span>Запомнить меня</span>
        </RememberMe>

        <Button variant="contained" color="primary" fullWidth>
          Продолжить
        </Button>

        <Divider>Или продолжить с помощью</Divider>

        <SocialButton>
          <img
            src="/assets/image/login-images/google.logo.svg"
            alt="google"
            width={20}
          />
          Google
        </SocialButton>
        <SocialButton>
          <img
            src="/assets/image/login-images/microsoft.logo.svg"
            alt="microsoft"
            width={20}
          />
          Microsoft
        </SocialButton>
        <SocialButton>
          <img
            src="/assets/image/login-images/apple.logo.svg"
            alt="apple"
            width={20}
          />
          Apple
        </SocialButton>
        <SocialButton>
          <img
            src="/assets/image/login-images/slack.logo.svg"
            alt="slack"
            width={20}
          />
          Slack
        </SocialButton>

        <Links>
          <span>Не удается войти в систему?</span>
          <span>Создать аккаунт</span>
        </Links>

        <hr color="black" />
        <ImgAt src="/assets/image/login-images/Atlassian-Logo.png" alt="" />
        <FooterText>
          Один аккаунт для Trello, Jira, Confluence и не только. <br />
          <span>Политика конфиденциальности</span>
          <span>Уведомление пользователя</span>
          Для защиты сайта используется система reCAPTCHA. Кроме того, действуют
          положения Политики конфиденциальности и Условий использования Google.
        </FooterText>
      </RegistrDiv>
      <ImgBg2 src="/assets/image/login-images/back.image2.sign-up.svg" alt="" />
    </MainDiv>
  );
};

export default Login;

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(235, 239, 240);
  height: 100vh;
  position: relative;
`;

const RegistrDiv = styled.div`
  display: flex;
  
  flex-direction: column;
  align-items: center;
  background-color: white;
  color: black;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 350px;
  border-radius: 10px;
`;

const ImgLogo = styled.img`
  width: 150px;
  margin-bottom: 10px;
`;

const RememberMe = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

const SocialButton = styled(Button).attrs({
  variant: "outlined",
  fullWidth: true,
  color: "default",
})`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: none;
  margin-bottom: 10px;
  gap: 10px;
`;

const Divider = styled.span`
  margin: 20px 0;
  font-size: 14px;
  color: gray;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  font-size: 12px;
  margin-top: 10px;
  span {
    color: blue;
    cursor: pointer;
  }
`;

const ImgAt = styled.img`
  width: 150px;
  margin: 20px 0;
`;

const FooterText = styled.span`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  font-size: 12px;
  color: gray;
  text-align: center;
  width: 460px;
  margin: 20px auto;
`;

const ImgBg1 = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 350px;
`;

const ImgBg2 = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 350px;
`;
