import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NavBar from '../../Components/Navbar/Navbar'

const API = 'http://localhost:3000'
const Home = () => {
  const [blogs, setBlogs] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  useEffect(() => { axios.get(`${API}/blogs`).then(r => setBlogs(Array.isArray(r.data.data) ? r.data.data : [])).catch(() => setError('Could not connect to your CMS API. Make sure your backend is running on port 3000.')).finally(() => setLoading(false)) }, [])
  const filtered = useMemo(() => blogs.filter(b => `${b.Title || ''} ${b.SubTitle || ''} ${b.Description || ''}`.toLowerCase().includes(search.toLowerCase())), [blogs, search])
  const excerpt = value => (value || 'No description added yet.').length > 130 ? `${value.slice(0, 130).trim()}…` : value || 'No description added yet.'
  return <div className="app-shell"><NavBar/><main className="page-wrap">
    <section className="page-heading"><div><div className="eyebrow">YOUR CREATIVE WORKSPACE / 01</div><h1>Good content starts here<span style={{color:'#a1bd4c'}}>.</span></h1><p>A little space for your big ideas. Create, manage, and publish your stories.</p></div><Link className="primary-btn" to="/createblog"><span>＋</span> Create an article</Link></section>
    <section className="stats-grid" aria-label="Content overview">
      <div className="stat-card"><div className="stat-top"><span>Total articles</span><span className="stat-icon">▤</span></div><div className="stat-number">{loading ? '—' : String(blogs.length).padStart(2,'0')}</div><div className="stat-foot">Everything you’ve written</div></div>
      <div className="stat-card"><div className="stat-top"><span>Showing now</span><span className="stat-icon">◉</span></div><div className="stat-number">{loading ? '—' : String(filtered.length).padStart(2,'0')}</div><div className="stat-foot">Articles matching your search</div></div>
      <div className="stat-card"><div className="stat-top"><span>Your next idea</span><span className="stat-icon">✳</span></div><div className="stat-number" style={{fontSize:24}}>Start fresh</div><div className="stat-foot">Every great story begins somewhere</div></div>
    </section>
    <section><div className="section-heading"><h2>Your library</h2><span>{loading ? 'Loading your stories…' : `${filtered.length} ${filtered.length === 1 ? 'article' : 'articles'}`}</span></div>
      <div className="content-tools"><label className="search-box"><span>⌕</span><input aria-label="Search articles" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search your articles…"/></label><span className="filter-label">✦ &nbsp;Made for your ideas</span></div>
      {error && <div className="toast-error">{error}</div>}
      {loading ? <div className="empty-state"><div className="empty-icon">◌</div><h3>Gathering your stories</h3><p>Just a moment while your library loads.</p></div> : filtered.length ? <div className="article-grid">{filtered.map((blog,i)=><article className="article-card" key={blog._id || i}><div className={`article-art art-${i%4}`}><span className="art-label">FIELD NOTES &nbsp; / &nbsp; {String(i+1).padStart(2,'0')}</span></div><div className="article-content"><div className="article-meta"><span>ARTICLE · {Math.max(1,Math.ceil((blog.Description || '').split(/\s+/).filter(Boolean).length/200))} MIN READ</span><span className="status-pill">Saved</span></div><h3>{blog.Title || 'Untitled article'}</h3>{blog.SubTitle && <p style={{fontWeight:600,color:'#686c60',marginBottom:8}}>{blog.SubTitle}</p>}<p>{excerpt(blog.Description)}</p><div className="article-bottom"><span>In your library</span><Link className="text-link" to={`/singleblog/${blog._id}`}>Read article ↗</Link></div></div></article>)}</div> : <div className="empty-state"><div className="empty-icon">✳</div><h3>{search ? 'No matches just yet' : 'Your story starts here'}</h3><p>{search ? 'Try a different keyword or clear your search.' : 'Your library is a blank canvas. Add your first article and make it yours.'}</p>{search ? <button className="secondary-btn" onClick={() => setSearch('')}>Clear search</button> : <Link className="primary-btn" to="/createblog">＋ Write your first article</Link>}</div>}
    </section>
    <footer style={{marginTop:42,paddingTop:20,borderTop:'1px solid #e8e8e0',display:'flex',justifyContent:'space-between',gap:12,color:'#9a9c92',fontSize:10,letterSpacing:'.6px'}}><span>MADE FOR THE THINGS YOU WANT TO SAY.</span><span>PAPERPLANE CMS © 2026</span></footer>
  </main></div>
}
export default Home
