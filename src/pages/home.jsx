import React from 'react'
import { Link } from 'react-router-dom'

const home = () => {
  return (
    <div>
      <h1 className='text-4xl'>Home</h1>
      <Link to='/about'> About</Link>
    </div>
  )
}

export default home