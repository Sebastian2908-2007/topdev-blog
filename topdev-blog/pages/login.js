import { useState } from 'react';
import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import cookie from 'js-cookie';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err,setErr] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
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
      router.push('/adminDash');
      };

    } else {
     setTimeout(() => setErr(null),3000);
    };
  };

  const authenticateUser = async (email, password) => {
    // Get user from database
    const {user,token} = await getUserFromDatabase(email);
    if (user) {
      // Compare password with hashed password in database
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        return {user,token};
      }
    }
    setErr('invalid credentials');
return {user:null,token:null};
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
    setErr('invalid credentials');
    return {user:null,token:null};
  };

  return (
    <form className='d-flex flex-column align-items-center mt-5 text-light' onSubmit={handleSubmit}>
      <label>
        Email:
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      
      <br />
      <label>
        Password:
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      
      <br />
      <button className='p-1 rounded bg-success text-light' type="submit">Log in</button>
      {err ? <div className='text-danger mt-3'>{err}</div>:null}
    </form>
  );
};

export default Login;