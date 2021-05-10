import React, { useState } from 'react'

const Register = () => {
  const [userData, setUserData] = useState({
    UserName: '',
    Password: '',
    email: '',
    Age: ''
  });
  const [confirm, setConfirm] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirm(true)
    registerUser();
    console.log(userData)
  }

  const registerUser = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/notes', {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      })
      setSuccess(true);
    } catch (error) {
      console.log('Sorry data is not registering ', error)
    }
  }


  return (
    <div>
      <form className="Myform" onSubmit={handleSubmit}>
        <input onChange={handleChange} placeholder="username" name="UserName" />
        <input onChange={handleChange} placeholder="email" name="Password" />
        <input onChange={handleChange} placeholder="password" name="email" />
        <input onChange={handleChange} placeholder="age" name="Age" />
        <button type="submit">Submit</button>
      </form>
      {
        success && <p style={{ color: 'lightgreen', textAlign: 'center' }}>user register successfully</p>
      }

    </div>
  )
}

// Register.getInitialProps = () => {

// }

export default Register;
