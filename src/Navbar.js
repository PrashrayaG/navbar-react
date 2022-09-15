import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.jpg'


const Navbar = () => {

  // for toggle
  const [showLinks, setShowLinks] = useState(false);

  const linksContainerRef = useRef(null); // for the list
  const linksRef = useRef(null); // for the ul (unordered list)

  // 1.every time value for showLink changes, run useEffect. we want to use cb function (callback)
  useEffect(()=> {
    // 2. in cb function we want to check the height for the links
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    console.log(linksHeight);

    if(showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}Px`
    }
    else {
      linksContainerRef.current.style.height = `0Px`
    }

  },[showLinks])

  return (
  <nav>
    <div className="nav-center">

      <div className="nav-header">
        <img src={logo} alt="logo" className='logo'/>
        <button className='nav-toggle'
         onClick={()=> setShowLinks(!showLinks)}>
          <FaBars />
        </button>
      </div>

       {/* <div className={`${showLinks? "links-container show-container" : "links-container"}`}>   if showLinks is true show the class links-container show-container (see index.css for that). if false show only links-container */}

       <div className='links-container' ref={linksContainerRef}>
        <ul className='links' ref={linksRef}>
          
          {links.map((link)=> { // links coming from data.js. link is an array which have objects with properties id, url, text

          const {id,url,text} = link; // destructuring them to link

          return (
            <li key={id}>  
            <a href={url}>{text}</a>
            </li>
          )
          })}

        </ul>
      </div>

      <ul className='social-icons'>
        {/*  hardcoding
        <li>
        <a href="https://www.twitter.com">
          <FaTwitter/>
        </a>
        </li>

        <li>
        <a href="https://www.twitter.com">
          <FaTwitter/>
        </a>
        </li>

        <li>
        <a href="https://www.twitter.com">
          <FaTwitter/>
        </a>
        </li> */}

        {social.map((socialIcon)=> {

          const {id,url,icon} = socialIcon;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}

      </ul>
    </div>
  </nav>
  )
}

export default Navbar
