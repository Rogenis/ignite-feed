import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment () {
  return (
    <div className={styles.comment}>
      <img src='https://github.com/Rogenis.png' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className='styles.authorAndTime'>
              <strong>Rógenis Silva</strong>
              <time title='01 de maio ás 15:13' dateTime='2023-05-01 15:13:30'>Cerca de 1h atrás</time>
            </div>

            <buttom title="Deletar comentário">
              <Trash size={20} />
            </buttom>
          </header>
          <p>Muito bom Rógenis, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button type='button'>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}