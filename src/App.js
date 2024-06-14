
import React from 'react'
import './App.css'
import { Footer, Header,Possibility,WhatGpt3,Blog,Features } from './containers';
import { CTA,Brand,NavBar, } from './components';

const App = () => {
  return (
    <div className='App'>
<div className='gradient__bg'>
<NavBar/>
<Header/>
</div>
<Brand/>
<WhatGpt3/>
<Features/>
<Possibility/>
<CTA/>
<Blog/>
<Footer/>

</div>
  )
}

export default App