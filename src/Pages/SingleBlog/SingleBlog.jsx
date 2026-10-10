import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import NavBar from '../../Components/Navbar/Navbar'

export default function SingleBlog() {
  const { id } = useParams(); const navigate = useNavigate(); const [blog,setBlog] = useState(null); const [error,setError] = useState('')
  useEffect(() => { axios.get(`http://localhost:3000/blogs/${id}`).then(r => setBlog(r.data.data)).catch(() => setError('We could not load this article. Check your connection and try again.')) }, [id])
  const deleteBlog = async () => { if (!window.confirm('Delete this article? This action cannot be undone.')) return; try { await axios.delete(`http://localhost:3000/blogs/${id}`); navigate('/') } catch { setError('This article could not be deleted. Please try again.') } }
  return <div className="app-shell"><NavBar/><main className="page-wrap"><div style={{maxWidth:850,margin:'0 auto'}}><Link to="/" className="back-link">← &nbsp; Back to your library</Link>{error && <div className="toast-error">{error}</div>}{!blog && !error ? <div className="empty-state"><div className="empty-icon">◌</div><h3>Opening your article…</h3></div> : blog && <article className="detail-panel"><div className="detail-cover"><span>FIELD NOTES &nbsp; / &nbsp; YOUR LIBRARY</span></div><div className="detail-content"><div className="eyebrow">ARTICLE · {Math.max(1,Math.ceil((blog.Description || '').split(/\s+/).filter(Boolean).length/200))} MIN READ</div><h1>{blog.Title || 'Untitled article'}</h1>{blog.SubTitle && <p className="detail-subtitle">{blog.SubTitle}</p>}<div className="detail-description">{blog.Description || 'No content yet.'}</div><div className="detail-actions"><Link className="primary-btn" to={`/update/${blog._id}`}>✎ &nbsp; Edit article</Link><button className="danger-btn" onClick={deleteBlog}>⌫ &nbsp; Delete article</button></div></div></article>}</div></main></div>
}
