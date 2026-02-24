import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import './signup.css'

export default function Signup(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const nav = useNavigate()

  const submit = (e)=>{
    e.preventDefault()
    if(!name || !email || !password) return
    try{ localStorage.setItem('profile', JSON.stringify({ name, email })) } catch {}
    login(name)
    nav('/')
  }

  return (
    <div className="container auth-page">
      <h2>Create account</h2>
      <form onSubmit={submit} className="auth-form">
        <label>
          Name
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Full name" />
        </label>
        <label>
          Email
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Choose a password" />
        </label>

        <div style={{display:'flex',gap:8,alignItems:'center'}}>
          <button className="button" type="submit">Sign up</button>
          <small className="small">Already have an account? <Link to="/login">Login</Link></small>
        </div>
      </form>
    </div>
  )
}
