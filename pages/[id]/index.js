import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Edit = ({ SingleUserData }) => {
  const [userData, setUserData] = useState({
    UserName: SingleUserData.UserName,
    Password: SingleUserData.Password,
    email: SingleUserData.email,
    Age: SingleUserData.Age
  });

  const {UserName,Password,email ,Age} = userData;
  const [confirm, setConfirm] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

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
      const res = await fetch(`http://localhost:3000/api/notes/${router.query.id}`, {
        method: 'PUT',
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
        <input onChange={handleChange} placeholder="username" name="UserName" value={UserName} />
        <input onChange={handleChange} placeholder="email" name="Password" value={Password} />
        <input onChange={handleChange} placeholder="password" name="email" value={email} />
        <input onChange={handleChange} placeholder="age" name="Age" value={Age} />
        <button type="submit">Submit</button>
      </form>
      {
        success && <p style={{ color: 'lightgreen', textAlign: 'center' }}>user register successfully</p>
      }

    </div>
  )
}

Edit.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/notes/${id}`);
  const { data } = await res.json();;

  return {
    SingleUserData: data
  }
}


export default Edit;
