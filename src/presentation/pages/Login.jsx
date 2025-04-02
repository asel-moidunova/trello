import { Button, Checkbox, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setError, setUser } from "../../store/slice/UserSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [needsPassword, setNeedsPassword] = useState(false);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setNeedsPassword(value.includes("@gmail.com"));
  };

  const handleLogin = () => {
    if (needsPassword && !password) {
      dispatch(setError("Введите пароль!"));
      return;
    }

    // Имитируем запрос на сервер
    if (email === "test@gmail.com" && password === "123456") {
      dispatch(setUser({ email }));
      navigate("/home"); // Переход на главную страницу
    } else {
      dispatch(setError("Неверный email или пароль"));
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
    dispatch(setUser({ email: `${provider}@social.com` }));
    navigate("/home");
  };

  return (
    <MainDiv>
      <ImgBg1 src="/assets/image/login-images/back.img1.png" alt="" />
      <RegistrDiv>
        <ImgLogo src="/assets/image/login-images/Trello_logo.png" alt="trello-logo" />
        <h3>Войдите, чтобы продолжить</h3>

        <TextField
          label="Введите адрес электронной почты"
          variant="outlined"
          fullWidth
          value={email}
          onChange={handleEmailChange}
          sx={{ marginBottom: "10px" }}
        />

        {needsPassword && (
          <TextField
            type="password"
            label="Введите пароль"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ marginBottom: "10px" }}
          />
        )}

        <RememberMe>
          <Checkbox />
          <span>Запомнить меня</span>
        </RememberMe>

        <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
          Продолжить
        </Button>

        <Divider>Или продолжить с помощью</Divider>
        <SocialButtons>
          <SocialButton onClick={() => handleSocialLogin("google")}>
            <img src="/assets/image/login-images/google.logo.svg" alt="google" width={20} />
            Google
          </SocialButton>
          <SocialButton onClick={() => handleSocialLogin("microsoft")}>
            <img src="/assets/image/login-images/microsoft.logo.svg" alt="microsoft" width={20} />
            Microsoft
          </SocialButton>
          <SocialButton onClick={() => handleSocialLogin("apple")}>
            <img src="/assets/image/login-images/apple.logo.svg" alt="apple" width={20} />
            Apple
          </SocialButton>
          <SocialButton onClick={() => handleSocialLogin("slack")}>
            <img src="/assets/image/login-images/slack.logo.svg" alt="slack" width={20} />
            Slack
          </SocialButton>
        </SocialButtons>

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

// Стили (без изменений)
const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(235, 239, 240);
  height: 120vh;
  position: relative;
  overflow: hidden;
  width: 100%;
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
  position: absolute;
  width: 150px;
  margin: 20px 0;
  margin-top: 490px;
`;

const FooterText = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: gray;
  text-align: center;
  margin-top: 40px;
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

const SocialButtons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
