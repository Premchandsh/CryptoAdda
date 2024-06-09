import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-div'>
        <p>&copy; 2024 - CryptoAdda | Made with <i className="fa-solid fa-heart"></i> by Prem chand</p>
        <div className='social-media'>
            <a target='_blank' href="https://github.com/Premchandsh"><i className="fa-brands fa-github"></i></a>
            <a target='_blank' href="https://www.linkedin.com/in/premchandsh/"><i className="fa-brands fa-linkedin"></i></a>
        </div>
    </div>
  )
}

export default Footer