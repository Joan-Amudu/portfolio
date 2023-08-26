import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div>  
          <h1>Joan Amudu</h1>    
          <h4>Full-Stack Developer</h4>
          <p>Hi, I'm Joan Amudu a full-stack developer
            <br></br>based in Sydney Australia
          </p>
        </div>
        <Image
          className={styles.logo}
          src="/home-image.png"
          alt="Joan Amudu picture"
          width={280}
          height={240}
          priority
        />
      </div>
      <div>
        <p>TECH STACK | 

        </p>
      </div>
    </main>
  )
}
