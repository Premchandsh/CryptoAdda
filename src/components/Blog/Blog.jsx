import React from 'react'
import './Blog.css'

function Blog({imgSrc, blogCategory, blogTitle, blogDesc, writerName, date}) {
  return (
    <div className="blog-container">
                <div className="image">
                    <img src={imgSrc} alt="blog-image" />
                </div>
                
                <div className="blog-info">
                    <p className='blog-category'>{blogCategory}</p>
                    <h2 className='blog-title'>{blogTitle}</h2>
                    <p className='blog-description'>{blogDesc}</p>
                </div>
                
                <div className="blog-writer">
                <span className='writer-name'><i class="bi bi-person-circle"></i>&nbsp;{writerName}</span>
                <span><i class="bi bi-clock"></i>&nbsp;{date}</span>
                </div>
            </div>
  )
}

export default Blog