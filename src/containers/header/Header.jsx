import React from 'react'

import './Header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const Header = () => {
  return (
    <div className='header section-padding ' id='home'>
      <div className='header-content'>

         <h1 className='gradient__text'>
        Let's Build Something Amazing with GPT-3 OpenAI
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, iure tempora? Excepturi explicabo ea eveniet? Maiores reprehenderit repellendus voluptas nemo dolores iusto in, quas laborum ex eligendi doloribus sunt ea.</p>
        <div className='header-content-input'>

          <input type='email' placeholder='your email address' />
          <button type='button'>Get started</button>
        </div>
        <div className='header-content-people'>
          <img src={people} alt='people'></img>
          <p>1000 people requested access</p>
        </div>

       
      </div>
      <div className='header-image'>

          <img src={ai} alt='AI'></img>
      </div>


      </div>
  )
}

export default Header