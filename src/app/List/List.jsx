import Image from "next/image";
import styles from "./List.module.css";

import detailsIcon from "../../../public/detailsIcon.svg";
import fruitTag from "../../../public/fruitTag.svg";

export default function List() {
  return (
    <main className={styles.main}>
      <div className={styles.item}>
        <input type="checkbox" name="" id="" />
        <div>
          <h4>Maçã</h4>
          <span>unidades</span>
        </div>
        <div>
          <Image
            src={fruitTag}
            alt="tag of fruit product"
            width={82}
            height={32}
          />
          <Image
            src={detailsIcon}
            alt="tag of fruit product"
            width={20}
            height={20}
          />
        </div>
      </div>
    </main>
  );
}
