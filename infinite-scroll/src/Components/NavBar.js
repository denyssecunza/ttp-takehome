import React from 'react'


function NavBar(){

  return(
    <nav className="navbar fixed-top navbar-light bg-light" style={{backgroundColor:"white"}} >
      <a className="navbar-brand" href="/">
        <img src="https://i.pinimg.com/originals/40/e2/6b/40e26beab6a4049d7d52cee459a7dbb8.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
      </a>
      <span className="navbar-text">
        TTP Challenge #1 Infinite-Scroll
      </span>
    </nav>

  )
}

export default NavBar;