import dynamic from 'next/dynamic';
const HeaderDropLeft = dynamic(() =>import('@/components/HeaderDropList'),{ssr: false});
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import {ImFacebook} from 'react-icons/im';
import {FiTwitter,FiInstagram} from 'react-icons/fi';
const Layout = ({children}) => {
    return(
<>
<header className={styles.header}>
    <div className={styles.imgDiv}>
<Image 
        src='/topdev-logo.png'
        alt='TopDev logo'
        sizes="(max-width: 2560px) 22vw,"
        fill
        priority={true}
    /> 
  </div>
  <HeaderDropLeft/>
</header>
<main className={styles.main}>
    {children}
</main>
<footer className={styles.footer}>
<span className=''>&copy; TopDev.Blog {new Date().getFullYear()}</span>
<div className='d-flex flex-row justify-content-between align-items-center w-25'>
            <a className='' href='https://www.facebook.com/topdev11' target='_blank'  rel="noopener noreferrer">
            <ImFacebook/>
            </a>
            <a className='' href='https://www.instagram.com/topdev.tech/' target='_blank'  rel="noopener noreferrer">
            <FiInstagram/>
            </a>
            <a className='' href='https://twitter.com/topdev_tech' target='_blank'  rel="noopener noreferrer">
            <FiTwitter/>
            </a>
        </div>
</footer>
</>
    );
};

export default Layout;