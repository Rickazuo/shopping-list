import Image from 'next/image'
import styles from './page.module.css'
import AddItem from './AddItem/AddItem'
import List from './List/List'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
      <h1 className={styles.title}>Lista de Compras</h1>
      <AddItem />
      <List />
      </div>
    </main>
  )
}
