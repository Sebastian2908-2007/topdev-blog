import { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import cookie from 'js-cookie';
import SplitButton from 'react-bootstrap/SplitButton';
import styles from '@/styles/Home.module.css';
import { SSRProvider } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
//#F8E183 yellow


const HeaderDropList = () => {
  const [render,setRender] = useState(false);
  const isLoggedIn = cookie.get('isLoggedIn');
  const isAdmin = cookie.get('isAdmin');
  const router = useRouter();

  const logout = () => {
    cookie.remove('isLoggedIn');
    cookie.remove('isAdmin');
    localStorage.removeItem('user_token');
    setRender(true);
    router.push('/');
  };

useEffect(() => {
setTimeout(() => {setRender(false)},3000);
},[render]);
    return(
      <SSRProvider>
           <style type="text/css">
           {` .btn-secondary{
            background-color: rgb(61, 96, 152);
            color: #F8E183;
           }
           .dropdown-menu{
            background-color: rgb(61, 96, 152);
           } 
           .dropdown-toggle {
            background-color: rgb(61, 96, 152);
            color: #F8E183;
           }
           `}
           </style>
 <div className={styles.dropDown}>
     <SplitButton
              id={`dropdown-button-drop-down-centered`}
              drop={'down-centered'}
              variant="secondary"
              title={`Menu`}
              style={{padding:'4%', backgroundColor:'rgb(33, 43, 89)'}}
            >
                <div className='d-flex flex-column'>
              <Link className={styles.navLink} href='/'>Home</Link>
              <Link className={styles.navLink} href='/About'>About</Link>
             {!isLoggedIn ? <Link className={styles.navLink} href='/login'>Login</Link>
             :
             <button className='bg-danger text-white' onClick={() => logout()}>Logout</button>}
             {(isLoggedIn) && (isAdmin === 'true') ? <Link href='/adminDash' className={styles.navLink}>Dashboard</Link>:null}
              <Dropdown.Divider />
             {isLoggedIn ? null: <Link className={styles.navLink} href='/register'>Register</Link>}
              </div>
            </SplitButton>
 </div>
   </SSRProvider>
    );
};

export default HeaderDropList;