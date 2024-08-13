import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav id="menu" class="navbar navbar-default navbar-fixed-top">
  <div class="container"> 
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
    </div>
    
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><a href="#features" class="page-scroll">Specials</a></li>
        <li><a href="#about" class="page-scroll">About</a></li>
        <li><Link to="/" className="page-scroll">Home</Link></li>
        <li><Link to="/Sign_up" className="page-scroll">SignUp</Link></li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar