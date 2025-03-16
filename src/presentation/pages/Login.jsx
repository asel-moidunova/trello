import { Button, Checkbox, TextField } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../data/firebase'; 
import { useDispatch } from "react-redux";
import { setUser, setError } from "../../store/slice/UserSlice"; 

const Register = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [showPasswordField, setShowPasswordField] = useState(false);

  const email = watch("email");

  const onSubmit = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        dispatch(setUser(userCredential.user));
      })
      .catch((error) => {
        dispatch(setError(error.message));
      });
  };

  React.useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setShowPasswordField(emailRegex.test(email));
  }, [email]);

  return (
    <MainDiv>
      <BgImg1 src="/assets/image/login-images/back.img1.png" alt="" />
      <RegistrDiv>
        <ImgLogo src="/assets/image/login-images/Trello_logo.png" alt="dfghj" />
        <h3>Зарегистрируйтесь, чтобы продолжить</h3>

        <TextField
          label="Введите адрес электронной почты"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "10px" }}
          {...register("email", { 
            required: "Поле email обязательно",
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Неверный формат email" }
          })}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ''}
        />

        {showPasswordField && (
          <TextField
            label="Пароль"
            type="password"
            fullWidth
            sx={{ marginBottom: "10px" }}
            {...register("password", { 
              required: "Поле пароля обязательно", 
              minLength: { value: 6, message: "Пароль должен содержать не менее 6 символов" } 
            })}
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ''}
          />
        )}

        <RememberMe>
          <Checkbox />
          <span>Запомнить меня</span>
        </RememberMe>

        <Button variant="contained" color="primary" fullWidth onClick={handleSubmit(onSubmit)}>
          Продолжить
        </Button>

        <Divider>Или зарегистрироваться с помощью</Divider>

        <SocialButton>
          <img src="/assets/image/login-images/google.logo.svg" alt="google" width={20} />
          Google
        </SocialButton>
        <SocialButton>
          <img src="/assets/image/login-images/microsoft.logo.svg" alt="microsoft" width={20} />
          Microsoft
        </SocialButton>
        <SocialButton>
          <img src="/assets/image/login-images/apple.logo.svg" alt="apple" width={20} />
          Apple
        </SocialButton>
        <SocialButton>
          <img src="/assets/image/login-images/slack.logo.svg" alt="slack" width={20} />
          Slack
        </SocialButton>

        <Links>
          <p>Уже есть аккаунт? <a href="#">Войти</a></p>
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
      <BgImg2 src="/assets/image/login-images/back.image2.sign-up.svg" alt="" />
    </MainDiv>
  );
};

export default Register;

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
  padding: 30px;
  text-align: center;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  width: 350px;
  border-radius: 10px;
  margin-top: -10vh;
  position: relative;
`;

const RememberMe = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 15px;
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
  margin-bottom: 15px;
  gap: 10px;
  height: 40px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
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

const BgImg1 = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 350px;
`;

const BgImg2 = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 350px;
`;

const ImgLogo = styled.img`
  width: 100px;
  margin-bottom: 20px;
`;
