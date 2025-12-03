import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar(){
const loc = useLocation()
return (
<header className="navbar">
<div className="brand">
<div className="logo-moon glow" aria-hidden />
<div>
<h1>Moon🌙 & Moonflower🌺</h1>
<p>An apology to my Moonflower🌺</p>
</div>
</div>


<nav className="nav-links">
<Link to="/" className={loc.pathname === '/' ? 'active' : ''}>Home</Link>
<Link to="/apology">Apology</Link>
<Link to="/memories">Memories</Link>
<Link to="/flowers">Flower Garden</Link>
<Link to="/message">Message</Link>
<Link to="/about">About</Link>
</nav>
</header>
)
}

export default Navbar
