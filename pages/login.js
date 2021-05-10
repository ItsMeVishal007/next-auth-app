import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Login = ({ Users }) => {
  const [value, setValue] = useState({ email: '', password: '' });
  const [error, setError] = useState(false)
  const router = useRouter();
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const dbdata = Users.filter((user) => (
      user.email === value.email && user.Password === value.password
    ))

    if (!dbdata[0]) {
      setError(false)
      router.push('/login')
    } else {
      setError(true)
      router.push('/homepage')
    }
  }

  return (
    <div>
      <form className="Myform" onSubmit={handleSubmit}>
        <input placeholder="Email" name="email" onChange={handleChange} />
        <input placeholder="Password" name="password" onChange={handleChange} />
        <button type='submit'>Login</button>
      </form>
      {
        error ?
          <p style={{ color: 'lightgreen', textAlign: 'center' }}>User founded</p> :
          null
      }
    </div>
  )
}

Login.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/notes');
  const { data } = await res.json();

  return { Users: data }
}

export default Login;
