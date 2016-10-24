import React from 'react'
import {Link} from './Router'

const Footer = (props) => {
  return (
    <div className="Footer">
      <Link to='/'>All</Link>
      <Link to='/active'>Active</Link>
      <Link to='/complete'>Completed</Link>
    </div>
  )
}

export default Footer
