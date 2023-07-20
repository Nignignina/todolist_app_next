import Log from "@/components/Log";
import styles from "@/styles/login.module.scss";
import { AiFillHome } from "react-icons/ai";
import Link from "next/link";

export default function login() {
  return (
    <>
      <div className="main">
        <div className={styles.login}>
          <Link href={"/"}>
            {" "}
            <div className={styles.button}>
              {" "}
              <AiFillHome />
            </div>{" "}
          </Link>
          <Log />
        </div>
      </div>
    </>
  );
}
