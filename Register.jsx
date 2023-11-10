import React from 'react'
import"../styles/register.css";
const Register = () => {
  return (
    <div className='registerContainer'>
        <h3>Register</h3>
            <div>
                <input type="email" name='email' placeholder='Phone number, username, or email' />
            </div>
            <div>
                <input type="password" name='password' placeholder='Password' />
            </div>
            <button>Registration</button>
            <button className='link'>Want to login?</button>
        </div>
  )
}

export default Register