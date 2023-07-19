import styles from "./CardList.module.scss";
import Card from "../Card";
import { MainContext } from "@/store/MainContext";
import { useContext, useState } from "react";
const CardList = () => {
  const { state, dispatch } = useContext(MainContext);

  const [input, setInput] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log("norefresh");
    dispatch({
      type: "ADD",
      payload: {
        id: Math.floor(Math.random() * 1000000),
        content: input,
      },
    });
  };
  const onHandleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={styles.CardList}>
      <div className={styles.interaction}>
        <form onSubmit={onHandleSubmit}>
          <input
            type="text"
            name="conente"
            placeholder="Add a new note"
            value={input}
            onChange={onHandleInput}
          />
          <input type="sumbit" value="+" onClick={onHandleSubmit} />
        </form>
      </div>
      <div className={styles.wrappercard}>
        {state?.data?.map((todo) => (
          <>
            <Card data={todo} key={todo.id} />
          </>
        ))}
      </div>
    </div>
  );
};

export default CardList;

// map.initialdata
