import Image from "next/image";
import styles from "./AddItem.module.css";

import addButton from "../../../public/addButton.png";

export default function AddItem() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <label className={styles.label}>Item</label>
        <input className={styles.input} type="text" />
      </section>
      <section className={styles.section}>
        <label className={styles.label}>Quantidade</label>
        <div className={styles.inputSelect}>
          <input className={styles.inputTogether} type="text" />
          <select className={styles.selectTogether} name="" id="">
            <option value="">Un.</option>
          </select>
        </div>
      </section>
      <section className={styles.section}>
        <label className={styles.label}>Categoria</label>
        <select className={styles.select} name="" id="">
          <option value="">Selecione</option>
        </select>
      </section>
      <button className={styles.addButton}>
        <Image
          src={addButton}
          alt="icon of add button"
          width={40}
          height={40}
        />
      </button>
    </main>
  );
}
