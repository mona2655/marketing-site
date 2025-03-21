import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your signup logic here
    console.log('Signup with:', { name, username, password })
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 mt-8'>
      <div className='max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg'>
        <h2 className='text-3xl font-bold text-center text-brandPrimary'>Sign Up</h2>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label className='block text-sm font-medium text-gray-700'>Full Name</label>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='mt-1 p-2 w-full border rounded-md'
              required
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>Email</label>
            <input
              type='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='mt-1 p-2 w-full border rounded-md'
              required
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>Password</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='mt-1 p-2 w-full border rounded-md'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full bg-brandPrimary text-white py-2 px-4 rounded-md hover:bg-neutralDgrey transition'
          >
            Create Account
          </button>
        </form>
        <p className='text-center'>
          Already have an account?{' '}
          <Link to='/login' className='text-brandPrimary hover:underline'>
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup