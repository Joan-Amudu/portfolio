import styles from './page.module.css'
import Link from "next/link"
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div>  
          <h1>Hi, I'm <span>Joan Amudu</span></h1>
          <br></br>   
          <h3>A Full-Stack Developer based in Sydney Australia</h3>
          <br></br>      
          <p><span>TECH STACK:</span> HTML | CSS | JavaScript | React</p>
        </div>                   
      </div>
      <div className={styles.center}>
        <Link href="/projects">
          <Button style={{color:'#525FE1'}}>Learn More</Button>
        </Link>
        <Link href="/contact">
          <Button style={{color:'#525FE1'}}>Contact Me</Button>
        </Link>
      </div> 
            
    </main>
  )
}
