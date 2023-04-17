import styles from '@/styles/Home.module.css';
import Image from 'next/image';
const Layout = ({children}) => {
    return(
<>
<header className={styles.header}>
    <div className={styles.imgDiv}>
<Image 
        src='/topdev-logo.png'
        alt='crush it catering logo'
        sizes="(max-width: 2560px) 22vw,"
        fill
    /> 
  </div>
</header>
<main className={styles.main}>
    {children}
</main>
<footer className={styles.footer}>Footer</footer>
</>
    );
};

export default Layout;