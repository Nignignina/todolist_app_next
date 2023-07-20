import { useState } from "react";
import styles from "./Log.module.scss";

const Log = () => {
  // console.log(app);
  const [input, setInput] = useState("");
  return (
    <>
      <div className={styles.Log}>
        LOG IN
        <form action="">
          <input type="text" placeholder="enter email" value={input} />
          <input type="submit" name="login" />
        </form>
      </div>
    </>
  );
};
export default Log;
