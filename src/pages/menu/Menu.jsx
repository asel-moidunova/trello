import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Modal from "../../UI/Modal";
import { useDispatch } from "react-redux";
import { setBackgroundUrl } from "../../store/slice/BackgrounSlice";

const images = [
  {
    id: 1,
    url: "https://static.vecteezy.com/system/resources/thumbnails/040/890/255/small_2x/ai-generated-empty-wooden-table-on-the-natural-background-for-product-display-free-photo.jpg",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 3,
    url: "https://t4.ftcdn.net/jpg/04/61/47/03/360_F_461470323_6TMQSkCCs9XQoTtyer8VCsFypxwRiDGU.jpg",
  },
  {
    id: 4,
    url: "https://plus.unsplash.com/premium_photo-1668130718429-7abf7b186f2f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJpZ2h0JTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    url: "https://t4.ftcdn.net/jpg/02/10/45/95/360_F_210459536_XmLDEcKq2DpeNLVmheuWeu9NM9aGKnih.jpg",
  },
  {
    id: 6,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsHsEjCLoxTAmiTAQ_WlO0bvlWNuYHAFxMQ&s",
  },
];

const Menu = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };
  const chanheBackgroundImage = () => {
    navigate("/home/menu/images");
  };
  return (
    <Cont>
      <MenuWrapper>
        <Outlet />

        <HeaderMenu>
          <Headercont>
            <span>Меню</span>
            <p onClick={back}>
              {" "}
              <i class="fa-solid fa-xmark"></i>{" "}
            </p>
          </Headercont>
        </HeaderMenu>
        <hr />
        <Section1>
          <svg
            width="24"
            height="24"
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16V6ZM14 5C13.4477 5 13 5.44772 13 6V12C13 12.5523 13.4477 13 14 13H18C18.5523 13 19 12.5523 19 12V6C19 5.44772 18.5523 5 18 5H14Z"
              fill="currentColor"
            ></path>
          </svg>
          <SectionCont>
            <span>о доске</span>
            <br />
            <span>Добавьте описание</span>
          </SectionCont>
        </Section1>
        <Section2 onClick={chanheBackgroundImage}>
          <i class="fa-solid fa-dice-d6"></i>
          <NameCont>Сменить фон</NameCont>
        </Section2>

        <Section3>
          <svg
            width="24"
            height="24"
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3 6C2.44772 6 2 6.44772 2 7C2 7.55228 2.44772 8 3 8H11C11.5523 8 12 7.55228 12 7C12 6.44772 11.5523 6 11 6H3ZM4 16V12H20V16H4ZM2 12C2 10.8954 2.89543 10 4 10H20C21.1046 10 22 10.8954 22 12V16C22 17.1046 21.1046 18 20 18H4C2.89543 18 2 17.1046 2 16V12Z"
              fill="currentColor"
            ></path>
          </svg>
          <NameCont>поля пользователя</NameCont>
        </Section3>

        <Section4>
          <svg
            width="24"
            height="24"
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0254 3C9.25613 3 7.01123 5.23858 7.01123 8C7.01123 10.7614 9.25613 13 12.0254 13C14.7946 13 17.0395 10.7614 17.0395 8C17.0395 5.23858 14.7946 3 12.0254 3ZM9.01688 8C9.01688 9.65685 10.3638 11 12.0254 11C13.6869 11 15.0338 9.65685 15.0338 8C15.0338 6.34315 13.6869 5 12.0254 5C10.3638 5 9.01688 6.34315 9.01688 8Z"
              fill="currentColor"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0254 11C16.7803 11 20.6765 14.6667 21.0254 19.3194C20.8721 20.2721 20.0439 21 19.0452 21H18.9741C18.9741 21 18.9741 21 18.9741 21L5.0767 21C5.07671 21 5.0767 21 5.0767 21L5.00562 21C4.00691 21 3.1787 20.2721 3.02539 19.3193C3.37428 14.6667 7.27038 11 12.0254 11ZM5.0767 19H18.9741C18.4875 15.6077 15.5618 13 12.0254 13C8.48892 13 5.56331 15.6077 5.0767 19ZM19.0451 19.9769V20.0231C19.0452 20.0154 19.0452 20.0077 19.0452 20C19.0452 19.9923 19.0452 19.9846 19.0451 19.9769Z"
              fill="currentColor"
            ></path>
          </svg>
          <NameCont>Участники</NameCont>
        </Section4>
      </MenuWrapper>
    </Cont>
  );
};

export default Menu;

export const Images = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeImg = (url) => {
    dispatch(setBackgroundUrl(url));
    navigate("/home");
  };
  return (
    <Modal>
      <Background>
        {images.map((el) => (
          <img
            key={el.id}
            onClick={() => changeImg(el.url)}
            src={el.url}
            alt=""
          />
        ))}
      </Background>
    </Modal>
  );
};

const Cont = styled.div`
  height: 100vh;
  background-color: #1a1919;
`;
const Background = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 41.3rem;
  & img {
    padding: 10px;
    width: 200px;
    height: 140px;
    border-radius: 4px;
    &:hover {
      background-color: #383939;
    }
  }
`;

const MenuWrapper = styled.div`
  position: fixed;
  color: #cbcbcb;
  top: 10em;
  left: 65%;
  transform: translate(-103%, 19%);
  border-radius: 10px;
  width: 370px;
  height: 300px;
  background-color: #383837;
`;

const HeaderMenu = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 100px;
`;
const Headercont = styled.div`
  width: 200px;
  margin-left: 50px;
  display: flex;
  justify-content: space-between;
`;

const Section1 = styled.div`
  padding: 6px;
  width: 299px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
  &:hover {
    background-color: #515151;
  }
`;
const SectionCont = styled.div`
  width: 200px;
  margin-left: 15px;
`;

const NameCont = styled.span`
  margin-left: 15px;
`;

const Section2 = styled.div`
  border-radius: 4px;
  padding: 6px;
  width: 299px;
  margin-top: 15px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #515151;
  }
`;

const Section3 = styled.div`
  border-radius: 4px;
  width: 299px;
  margin-top: 15px;
  padding: 6px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #515151;
  }
`;

const Section4 = styled.div`
  width: 299px;
  border: none;
  border-radius: 4px;
  outline: none;
  margin-top: 15px;
  margin-left: 20px;
  padding: 6px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #515151;
  }
`;
