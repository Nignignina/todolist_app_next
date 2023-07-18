import styles from "./CardList.module.scss";
import Card from "../Card";
import { MainContext } from "@/store/MainContext";
import { useContext } from "react";
const CardList = () => {
  const state = useContext(MainContext);
  console.log(state);
  return (
    <div className={styles.CardList}>
      {" "}
      {state.data.map((todo) => (
        <Card data={todo} key={todo.id} />
      ))}{" "}
    </div>
  );
};

export default CardList;

// map.initialdata
