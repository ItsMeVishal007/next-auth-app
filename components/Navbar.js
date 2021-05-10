import React from 'react'
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div className='navbar'>
      {
        router.pathname === "/register" ? <h1>Register</h1> : router.pathname === '/login' ? <h1>Login</h1> : router.pathname === '/homepage' ? <h1>HomePage</h1> : router.pathname === '/' ? <h1>Home</h1> : <h1>Error</h1>
      }

    </div>
  )
}

export default Navbar
