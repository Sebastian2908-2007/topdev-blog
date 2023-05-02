import { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import cookie from 'js-cookie';
import SplitButton from 'react-bootstrap/SplitButton';
import styles from '@/styles/Home.module.css';
import { SSRProvider } from 'react-bootstrap';
import Link from 'next/link';
//#F8E183 yellow


const HeaderDropList = () => {
  const [render,setRender] = useState(false);
  const isLoggedIn = cookie.get('isLoggedIn');

  const logout = () => {
    cookie.remove('isLoggedIn');
    localStorage.removeItem('user_token');
    setRender(true);
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
              <Dropdown.Divider />
              <Link className={styles.navLink} href='/register'>Register</Link>
              </div>
            </SplitButton>
 </div>
   </SSRProvider>
    );
};

export default HeaderDropList;