import Image from "next/image";
import styles from "./List.module.css";

import detailsIcon from "../../../public/detailsIcon.svg";
import fruitTag from "../../../public/fruitTag.svg";
import bakeryTag from "../../../public/bakeryTag.svg";
import drinkTag from "../../../public/drinkTag.svg";
import legumeTag from "../../../public/legumeTag.svg";
import meatTag from "../../../public/meatTag.svg";
import { useState } from "react";

export default function List({ items }) {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };
  return (
    <main className={styles.main}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.boxItem} ${
            checkedItems[index] ? styles.scratchedBoxItem : ""
          }`}
        >
          <div className={styles.checkboxItem}>
            <input
              type="checkbox"
              name=""
              id="{`checkbox-${index}`}"
              onChange={() => handleCheckboxChange(index)}
            />
            <div className={styles.items}>
              <h4
                className={`${styles.item} ${
                  checkedItems[index] ? styles.scratched : ""
                }`}
              >
                {item.item}
              </h4>
              <div className={styles.quantityAndUnity}>
                <span className={styles.quantity}>{item.quantity}</span>
                <span className={styles.unity}>{item.unity}</span>
              </div>
            </div>
          </div>
          <div className={styles.typeAndPlus}>
            <Image
              src={
                item.category === "Fruta"
                  ? fruitTag
                  : item.category === "Padaria"
                  ? bakeryTag
                  : item.category === "Bebida"
                  ? drinkTag
                  : item.category === "Legume"
                  ? legumeTag
                  : item.category === "Açogue"
                  ? meatTag
                  : ""
              }
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
      ))}
    </main>
  );
}
