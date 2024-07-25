import React from 'react'
import './shoplist.css'
import { Link } from 'react-router-dom'
const Shoplist = () => {
  return (
    <div className='shoplink'>
        <span>Recently visited store</span>
        <br />
     <Link to="/review">
     First Choice Departmental Store.
          </Link>
    </div>
  )
}

export default Shoplist
