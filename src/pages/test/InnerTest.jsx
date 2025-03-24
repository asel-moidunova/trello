import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { styled } from "styled-components";
import Buttonn from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  addInnerTask,
  deleteInnerTask,
  toggleInnerTask,
} from "../../store/slice/TestSlice";

const InnerTest = (props) => {
  const { tasks, searchInputValue } = useSelector((state) => state.task);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [editingValue, setEditingValue] = useState("");

  const filteredTasks = tasks.filter((el) =>
    el.title.toLowerCase().includes(searchInputValue.toLowerCase())
  );

  const data = filteredTasks.find((el) => el.id === props.id);

  const clickHandler = () => {
    if (value.trim().length > 0) {
      dispatch(addInnerTask({ id: props.id, innerTask: value }));
      setValue("");
    }
  };

  const editInnerTask = (task) => {
    setEditingTask(task.id);
    setEditingValue(task.innerTask);
  };

  const saveEditingValue = (id) => {
    dispatch(toggleInnerTask({ id, parentId: props.id, editingValue }));
    setEditingTask(null);
  };

  const deleteTask = (id) => {
    dispatch(deleteInnerTask({ id, parentId: props.id }));
  };

  return (
    <Wrapper>
      <span>{props.title}</span>
      {data.innerTask.map((el) => (
        <div key={el.id}>
          {editingTask === el.id ? (
            <EditTask>
              <textarea
                value={editingValue}
                onChange={(e) => setEditingValue(e.target.value)}
                cols="24"
                rows="3"
              />
              <Buttonn
                backgroundColor="green"
                color="white"
                
                onClick={() => saveEditingValue(el.id)}
              >
                Сохранить
              </Buttonn>
                <Buttonn backgroundColor="red"
               marginTop="10px" 
                color="white"

                 onClick={() => deleteTask(el.id)}>
                Удалить
              </Buttonn>
            </EditTask>
          ) : (
            <InnerTask>
              <span>{el.innerTask}</span>
              <span onClick={() => editInnerTask(el)} className="edit">
                <i class="fa-solid fa-pen-to-square"></i>
              </span>
            </InnerTask>
          )}
        </div>
      ))}

      {props.textareaActive ? (
        <>
          <div>
            <textarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              cols="24"
              rows="3"
              placeholder="Ввести заголовок для карточки"
            />
          </div>
          <ButtonInerTask>
            <Buttonn onClick={clickHandler}>Добавить карточку</Buttonn>
            <p onClick={props.blockTextarea}>
              {" "}
              <i class="fa-solid fa-xmark"></i>{" "}
            </p>
          </ButtonInerTask>
        </>
      ) : (
        <ButtonInnerTask>
          <Buttonn onClick={props.showTextarea} backgroundColor="#000000">
            <FaPlus />
            <span>Добавить  карточку</span>
          </Buttonn>
        </ButtonInnerTask>
      )}
    </Wrapper>
  );
};

export default InnerTest;


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: #000000;
  border-radius: 5px;
  margin: 10px 10px 0 10px;
  font-size: 16px;
  font-weight: 500;
  color: #b6b6b6;
  padding: 12px;
  & span {
    padding: 0px 10px;
  }
  & div {
    margin-top: 10px;
  }
  & textarea {
    width: 15em;
    border-radius: 7px;
    background-color: #181818;
    color: #b6b6b6;
    border: none;
    outline: none;
    font-size: 16px;
    padding: 5px 10px;
    &::placeholder {
      font-size: 14px;
    }
  }
`;

const InnerTask = styled.div`
  background-color: #181818;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15em;
  padding: 5px 10px;
  border-radius: 5px;
  & .edit {
    width: 10px;
    padding: 2px 10px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    &:hover {
      background-color: #2b2b2b;
    }
  }
`;

const EditTask = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonInnerTask = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: #000000;
  &:hover {
    background-color: #292929;
  }
  & span {
    font-size: 11px;
  }
`;
const ButtonInerTask = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: #000000;
  width: 15em;
  justify-content: space-between;
  & span {
    font-size: 11px;
  }
`;


