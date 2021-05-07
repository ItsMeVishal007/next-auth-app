import React, { useState, useEffect } from 'react';

const Login = () => {
  const [value, setValue] = useState({ email: '', password: '' });
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value)
  }
  return (
    <form onSubmit={handleSubmit} method='post' action='/'>
      <input placeholder="Email" name="email" onChange={handleChange} />
      <input placeholder="Password" name="password" onChange={handleChange} />
      <button type='submit'>Login</button>
    </form>
  )
}

export default Login;
