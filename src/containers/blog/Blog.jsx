import React from 'react'
import './Blog.css'
import {blog1,blog2,blog3,blog4} from './import'
import Article  from '../../components/article/Article'

const Blog = () => {
  return (
    <div className='blog section__padding' id='blog'>

      <div className="heading">
        <h1 className="gradient__text">
        A lot is happening, 
        We are blogging about it.
        </h1>
      </div>
      <div className="blog-container">
        <div className="blog-container-groupA">
          <Article imgUrl={blog1}  date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className="blog-container-groupB">
        <Article imgUrl={blog2} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imgUrl={blog3} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imgUrl={blog4} date="Sep 26, 2021"  title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog