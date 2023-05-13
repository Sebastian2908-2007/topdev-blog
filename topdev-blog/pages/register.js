import { useState } from 'react';
import jwt from 'jsonwebtoken';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const router = useRouter();
  const [err,setErr] = useState(null);
  const handleSubmit = async (event) => {
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
        setErr(`Registration failed: ${message}`);
        setTimeout(() => setErr(null),3000);
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <h1 className='text-center mt-2'>Register</h1>
      <form className='d-flex flex-column align-items-center mt-5'  onSubmit={handleSubmit}>
        
        <label htmlFor="userName">UserName</label>
          <input
            type="userName"
            id="userName"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        
        
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        
        <button className='p-1 rounded bg-success text-light mt-4' type="submit">Register</button>
        {err ? <span className='text-danger'>{err}</span>:null}
      </form>
    </div>
  );
}