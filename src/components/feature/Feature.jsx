
import React from 'react'
import './Feature.css'
const Feature = ({text,title}) => {
  return (
  <div className='feature'>
      <div className="feature-title">

        <div>
         
        </div>
        <h1>{title}</h1>
      </div>
        <div className="feature-text">
          <p>{text}</p>
        </div>
      

    </div>
  )
}

export default Feature