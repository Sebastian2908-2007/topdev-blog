import { useState } from 'react';
/**MUI stuff starts*/
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import cookie from 'js-cookie';


const style = {
    display:"flex",
    flexDirection: "column",
    justifyContent: 'space-between',
    position: 'absolute',
    '@media screen and (min-width:768px )': {
      width:'50%'
     },
    '@media screen and (min-width:1366px )': {
      width:'35%'
     },
      top: '50%',
      padding: '5%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '90%',
      bgcolor: 'rgb(0,0,0,.6)',
      border: '4px solid rgb(33, 49, 89)',
      boxShadow: 24,
    };

const LoginModal = ({loginModalOpen,setLoginModalOpen}) => {
    const handleClose = () => {
        setLgnSgnUp('signup')
        setLoginModalOpen(false);
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const router = useRouter();
    const [lgnInSgnUp, setLgnSgnUp] = useState('signup');

    const handleLoginSubmit = async (e) => {
      e.preventDefault();
  
      // Authenticate user with email and password
      const {user,token} = await authenticateUser(email, password);
  
      if (user) {
        localStorage.setItem('user_token', token);
        const decodedToken = jwt.decode(token);
       cookie.set("isAdmin",`${decodedToken.isAdmin}`, {expires:2/24});
       cookie.set("isLoggedIn",true, {expires:2/24});
       
  
        // if admin go to create post page else go home
        if(!user.isAdmin){
          router.push('/');
        }else{
        router.push('/createPost');
        };
  
      } else {
        console.log('Invalid email or password');
      };
    };


    const handleRegisterSubmit = async (event) => {
      event.preventDefault();
  
      try {
         
         //console.log(email,password);
        const response = await fetch('/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password, userName }),
        });
        console.log(response) ;
  
        if (response.ok) {
            const data = await response.json();
            const user = data.user;
            const token = data.token;
            localStorage.setItem('user_token', token);
            const decodedToken = jwt.decode(token);
            cookie.set("isAdmin",`${decodedToken.isAdmin}`, {expires:2/24});
            cookie.set("isLoggedIn",true, {expires:2/24});
         // if admin go to create post page else go home
        if(!user.isAdmin){
          router.push('/');
        }else{
        router.push('/createPost');
        }
         // alert(`Registration successful! Welcome`);
        } else {
          const { message } = await response.json();
          alert(`Registration failed: ${message}`);
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred. Please try again later.');
      }
    };

  
    const authenticateUser = async (email, password) => {
      // Get user from database
      const {user,token} = await getUserFromDatabase(email);
  //console.log(user);
      if (user) {
        // Compare password with hashed password in database
        const match = await bcrypt.compare(password, user.password);
        if (match) {
          return {user,token};
        }
      }
  
      return null;
    };
  
    const getUserFromDatabase = async (email) => {
      // Call API to get user from database
      const response = await fetch(`/api/users?email=${email}`);
  
      if (response.ok) {
        const data = await response.json();
        const user = data.user;
        const token = data.token;
        return {user, token};
      };
  
      return null;
    };

    return(
        <Modal
        open={loginModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {lgnInSgnUp === 'signup' ?

        (
<form className='d-flex flex-column align-items-center' onSubmit={handleRegisterSubmit}>
        
        <label className='text-white' htmlFor="userName">UserName</label>
          <input
            type="userName"
            id="userName"         
            onChange={(event) => setUserName(event.target.value)}
            required
          />
          <label className='text-white' htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        
        
          <label className='text-white' htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        <div className='d-flex flex-row w-100 justify-content-between'>
        <button className='w-25 mt-4 text-light bg-primary' type="submit">Register</button>
        <button onClick={() => handleClose()} className='w-25 mt-4  text-light bg-danger' type="submit">Cancel</button>
        </div>
        <span onClick={() => setLgnSgnUp('login')} className='text-info'>Login</span>
      </form>
        )
        :
        (<form className='d-flex flex-column align-items-center mt-2' onSubmit={handleLoginSubmit}>
        <label className='text-light'>
          Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        
        <br />
        <label className='text-light'>
          Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        
        <br />
        <div className='d-flex flex-row justify-content-between w-75'>
        <button className='p-1 rounded  text-light bg-primary' type="submit">Log in</button>
        <button onClick={() => handleClose()}className='p-1 rounded bg-success text-light bg-danger' type="submit">cancel</button>
        </div>
      </form>)
     }
      </Box>
      </Modal>
    );
};
export default LoginModal;