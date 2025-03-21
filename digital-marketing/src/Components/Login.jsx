import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const navigate = useNavigate();

    const handleLogin = () =>{
        navigate("/")
    }

    const handlesubmit = (e) =>{
        e.preventDefault()
        console.log('Login with:', { username, password })
    }
  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-50 mt-8'>
        <div className='max-w-md w-full space-y-8 p-8 bg-white rounded shadow-lg'>
        <h2 className='text-3xl font-semibold text-brandPrimary text-center'>Login</h2>
        <form className='space-y-6'>
            <div>
                <label className='block text-sm font-medium text-gray-700'>Username:</label>
                <input 
                placeholder='Enter Username' 
                type='text' required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='mt-2 border rounded-md p-2 w-full'/>
            </div>
            <div>
                <label className='block text-sm font-medium text-gray-700'>Password</label>
                <input 
                placeholder='Enter Password' 
                type='password'
                 required
                 value={password}
                 onChange={(e)=> setPassword(e.target.value)}
                 className='mt-2 border rounded-md p-2 w-full'/>
            </div>
            <button onClick={handleLogin} className='bg-brandPrimary px-6 py-2 text-white rounded' type='submit'>Login</button>
        </form>
        <p> Don't have an account?{' '}
            <Link to='/signup'>
            Sign Up
            </Link>
        </p>
        </div>
        
        </div>
  )
}

export default Login