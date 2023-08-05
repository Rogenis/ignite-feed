import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(){
  return(
   <article className={styles.post}>
    <header>
      <div className={styles.author}>
        <img className={styles.avatar} src="https://github.com/Rogenis.png"/>
        <div className={styles.authorInfo}>
          <strong>Rógenis Silva</strong>
          <span>Front-end Developer</span>
        </div>
      </div>

      <time title='01 de maio ás 15:13' dateTime='2023-05-01 15:13:30'>Publicado há 1h</time>
    </header>

    <div className={styles.content}>
      <p>Fala galeraa 👋</p>
      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
      <p>👉 <a href=''>jane.design/doctorcare</a></p>
      <p>
        <a href=''>#novoprojeto</a>{' '}
        <a href=''>#nlw</a>{' '}
        <a href=''>#rocketseat</a>
      </p>
    </div>

    <form className={styles.commentForm}>
      <strong>Deixe seu comentário</strong>

      <textarea placeholder='Deixe um comentário' />
     
      <footer>
        <button type='submit'>Publicar</button>
      </footer>
    </form>

    <div className={styles.commentList}>
      <Comment />
    </div>

   </article>
  )
}