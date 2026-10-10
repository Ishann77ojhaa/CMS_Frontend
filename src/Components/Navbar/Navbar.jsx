import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const active = (path) => location.pathname === path ? 'nav-link active' : 'nav-link'
  return <header className="topbar"><div className="topbar-inner">
    <Link className="brand" to="/" onClick={() => setOpen(false)}><span className="brand-mark">p.</span><span>paper<span className="brand-light">plane</span><small>CONTENT STUDIO</small></span></Link>
    <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
    <nav className={open ? 'nav-links nav-open' : 'nav-links'}>
      <Link className={active('/')} to="/" onClick={() => setOpen(false)}>Overview</Link>
      <Link className={active('/createblog')} to="/createblog" onClick={() => setOpen(false)}>Write</Link>
    </nav>
    <div className="topbar-right"><span className="status-dot"/><span className="workspace-label">Workspace live</span><span className="avatar">IS</span></div>
  </div></header>
}
