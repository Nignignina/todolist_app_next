import styles from "./Card.module.scss";
import { useContext } from "react";
import { MainContext } from "@/store/MainContext";
const Card = ({ data }) => {
  const { state, dispatch } = useContext(MainContext);

  const onHandleDelete = () => {
    dispatch({ type: "REMOVE", payload: data.id });
  };

  return (
    <div className={styles.Card}>
      <div className={styles.infoEdit}>
        <div className={styles.category}> Category</div>
        <div className={styles.icons}>
          <div onClick={onHandleDelete}> D </div>

          <div> M</div>
          <div> C</div>
        </div>
      </div>

      <hr />
      <div className={styles.task}>
        <p> {data.task} </p>{" "}
      </div>
    </div>
  );
};

export default Card;
