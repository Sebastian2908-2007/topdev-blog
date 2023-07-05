
import { useEffect, useState } from 'react';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import GiteIcon from '@mui/icons-material/Gite';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WebIcon from '@mui/icons-material/Web';
import LogoutIcon from '@mui/icons-material/Logout';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { SSRProvider } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

function DrawerNav() {
    const [render,setRender] = useState(false);
    const [expand,setExpand] = useState(false);
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

    const closeDrawer = () => {
        setExpand(false);
    };
  useEffect(() => {console.log(expand)},[expand])
  useEffect(() => {
  setTimeout(() => {setRender(false)},3000);
  },[render]);
  return (
    <SSRProvider>
     {[false ].map((expand) => (
        <Navbar  key={expand}  expand={expand} className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Toggle className='navToggle' aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header className='drawer-header' closeButton>
              
                
              <Link href='/' className={styles.imgDivDrawer}>
<Image 
        src='/topdev-logo.png'
        alt='TopDev logo'
        sizes="(max-width: 2560px) 22vw,"
        fill
        priority={true}
    /> 
 </Link>
             
            </Offcanvas.Header>
            <Offcanvas.Body  className='drawer-body'>
            <Nav className='d-flex flex-column justify-content-between h-25'>
            <Navbar.Toggle   className='d-flex flex-row justify-content-start align-items-center  iconLinkDiv'><GiteIcon/><Link   className={styles.navLink} href='/'>Home</Link></Navbar.Toggle > 
              <Navbar.Toggle  className='d-flex flex-row justify-content-start align-items-center  iconLinkDiv'><InfoIcon/><Link   className={styles.navLink} href='/About'>About</Link></Navbar.Toggle >
             {!isLoggedIn ?  <Navbar.Toggle  className='d-flex flex-row justify-content-start align-items-center  iconLinkDiv'><LoginIcon/><Link   className={styles.navLink} href='/login'>Login</Link></Navbar.Toggle >
             :
             <Navbar.Toggle  className='d-flex flex-row justify-content-start  iconLinkDiv'><LogoutIcon/><span className=' text-white p-2 rounded logoutSpan' onClick={() => logout()}>Logout</span></Navbar.Toggle >}
             {(isLoggedIn) && (isAdmin === 'true') ? <Navbar.Toggle  className='d-flex flex-row justify-content-start align-items-center   iconLinkDiv'><DashboardIcon/><Link   href='/adminDash' className={styles.navLink}>Dashboard</Link></Navbar.Toggle >:null}
             {isLoggedIn ? null: <Navbar.Toggle  className='d-flex flex-row justify-content-start align-items-center  iconLinkDiv'><HowToRegIcon/><Link   className={styles.navLink} href='/register'>Register</Link></Navbar.Toggle >}
             <Navbar.Toggle  className='d-flex flex-row justify-content-start align-items-center  iconLinkDiv'><WebIcon/><a  className={styles.navLink} href='https://topdev.tech/' target='_blank'>Need web design?</a></Navbar.Toggle >
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      ))}
   </SSRProvider>
  );
}

export default DrawerNav;

/**
   <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
 */