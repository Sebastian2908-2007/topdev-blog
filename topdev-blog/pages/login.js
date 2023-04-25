import { useState } from 'react';
import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import cookie from 'js-cookie';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      router.push('/createPost');
      };

    } else {
      console.log('Invalid email or password');
    };
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

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Log in</button>
    </form>
  );
};

export default Login;