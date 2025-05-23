import React, { useState } from "react";
import { styled } from "styled-components";
import { FaPlus } from "react-icons/fa";
import Button from "../../UI/Button";
import { addTask } from "../../store/slice/TestSlice";
import { useDispatch, useSelector } from "react-redux";
import AddInnerTask from "./InnerTest";

const AddTest = (props) => {
  const { tasks, searchInputValue } = useSelector((state) => state.task);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [textareaActive, setTextareaActive] = useState(false);

  const filteredTasks = tasks.filter((el) =>
    el.title.toLowerCase().includes(searchInputValue.toLowerCase())
  );

  console.log(filteredTasks);
  console.log(tasks);

  const clickHandler = (e) => {
    props.inputTrue();
    blockTextarea();
    e.stopPropagation();
  };
  const clickHandlerr = (e) => {
    e.stopPropagation();
    props.inputFalse();
  };

  const onChangeInput = (event) => {
    setValue(event.target.value);
  };

  const taskHandler = (e) => {
    const task = {
      id: Math.random(),
      title: value,
      innerTask: [],
    };
    if (value.trim().length > 0) {
      dispatch(addTask(task));
      props.inputFalse();
    }
    setValue("");
    e.preventDefault();
    e.stopPropagation();
  };

  const showTextarea = () => {
    setTextareaActive(true);
  };
  const blockTextarea = () => {
    setTextareaActive(false);
  };

  return (
    <>
      {filteredTasks.map((el) => (
        <AddInnerTask
          showTextarea={showTextarea}
          blockTextarea={blockTextarea}
          textareaActive={textareaActive}
          title={el.title}
          id={el.id}
        />
      ))}
      <WrapperTask state={props.inputActive} onClick={clickHandler}>
        {!props.inputActive && (
          <span>
            <FaPlus />
            Добавьте еще одну колонку
          </span>
        )}
        {props.inputActive && (
          <InputWithButton onSubmit={taskHandler}>
            <input
              value={value}
              onChange={onChangeInput}
              placeholder="Ввести заголовок задачи"
            />
            <div>
              <Button
                onClick={taskHandler}
                padding="4px 13px"
                fontSize="11px"
                variant="contained"
              >
                Добавить список
              </Button>
              <CloseInput onClick={clickHandlerr}>
                <i class="fa-solid fa-xmark"></i>
              </CloseInput>
            </div>
          </InputWithButton>
        )}
      </WrapperTask>
    </>
  );
};

export default AddTest;

const WrapperTask = styled.div`
  display: flex;
  margin: 10px 10px 0 10px;
  background-color: ${(props) =>
    props.state === false ? "rgba(255, 255, 255, 0.4)" : "black"};
  width: 17em;
  padding: 12px 3px;
  text-align: center;
  border-radius: 5px;
  display: flex;
  cursor: ${(props) => (props.state === false ? "pointer" : "")};
  transition: 0.1s;
  align-items: center;
  flex-direction: column;
  &:hover {
    background-color: ${(props) =>
      props.state === false ? "rgba(255, 255, 255, 0.2)" : ""};
  }
  & span {
    width: 16em;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
  }
`;

const CloseInput = styled.div`
  border-radius: 4px;
  &:hover {
    background-color: #2e3133;
  }
`;

const InputWithButton = styled.form`
  color: white;
  & input {
    border: none;
    padding: 4px 15px;
    color: #a4a4a4;
    outline: 2px solid #7772e3;
    background-color: #1d1d1d;
    font-size: 15px;
    font-weight: 500;
    height: 25px;
    border-radius: 6px;
    &::placeholder {
      font-size: 14px;
    }
  }
  & div {
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
  }
`;
