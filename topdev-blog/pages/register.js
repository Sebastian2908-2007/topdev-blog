import { useState } from 'react';
import jwt from 'jsonwebtoken';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
       
       //console.log(email,password);
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
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

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}