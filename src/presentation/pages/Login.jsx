import { Button, Checkbox, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const Login = () => {
  const navigate = useNavigate();

  const onSuccess = (response) => {
    console.log('Login Success:', response);
    navigate('/home'); 
  };

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
    if (provider === 'google') {
      onSuccess({ provider });
    }
  };

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
          sx={{ marginBottom: "10px", fontSize: "10px" }}
        />

        <RememberMe>
          <Checkbox />
          <span>Запомнить меня</span>
        </RememberMe>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={onSuccess}>
          Продолжить
         </Button>
         

        <Divider>Или продолжить с помощью</Divider>

        <SocialButton onClick={() => handleSocialLogin('google')}>
          <img
            src="/assets/image/login-images/google.logo.svg"
            alt="google"
            width={20}
          />
          Google
        </SocialButton>
        <SocialButton onClick={() => handleSocialLogin('microsoft')}>
          <img
            src="/assets/image/login-images/microsoft.logo.svg"
            alt="microsoft"
            width={20}
          />
          Microsoft
        </SocialButton>
        <SocialButton onClick={() => handleSocialLogin('apple')}>
          <img
            src="/assets/image/login-images/apple.logo.svg"
            alt="apple"
            width={20}
          />
          Apple
        </SocialButton>
        <SocialButton onClick={() => handleSocialLogin('slack')}>
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
  overflow: hidden;
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
  position: relative;
  z-index: 1;
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
  text-transform: none !important;
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
  font-size: 12px;
  color: gray;
  text-align: center;
`;

const ImgBg1 = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 350px;
  z-index: 0;
`;

const ImgBg2 = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 350px;
  z-index: 0;
`;
