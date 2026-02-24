import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import './login.css'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(true)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const nav = useNavigate()

  const validateEmail = (v) => /\S+@\S+\.\S+/.test(v)

  const submit = async (e)=>{
    e.preventDefault()
    setError('')
    if(!validateEmail(email)) return setError('Please enter a valid email')
    if(password.length < 6) return setError('Password must be at least 6 characters')

    setLoading(true)
    try{
      const name = email.split('@')[0]
      const profile = { name, email }
      if(remember){
        localStorage.setItem('profile', JSON.stringify(profile))
      } else {
        try{ sessionStorage.setItem('profile', JSON.stringify(profile)) } catch {}
      }
      login(name)
      nav('/')
    }catch(err){
      setError('Login failed, please try again')
    }finally{ setLoading(false) }
  }

  return (
    <div className="container auth-page">
      <div className="login-card">
        <h2>Welcome back</h2>
        <p className="small">Sign in to access your cart and orders.</p>

        <form className="auth-form" onSubmit={submit}>
          {error && <div className="form-error">{error}</div>}

          <label>
            Email
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" />
          </label>

          <label>
            Password
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Your password" />
          </label>

          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
            <label style={{display:'flex',alignItems:'center',gap:8}}>
              <input type="checkbox" checked={remember} onChange={e=>setRemember(e.target.checked)} />
              <span className="small">Remember me</span>
            </label>
            <Link to="/contact" className="small">Forgot password?</Link>
          </div>

          <div style={{display:'flex',gap:8,flexWrap:'wrap',alignItems:'center'}}>
            <button className="button" type="submit" disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</button>
            <Link to="/signup" className="button ghost">Create account</Link>
          </div>
        </form>

        <div className="divider">or continue with</div>
        <div className="socials">
          <button className="social-btn">Continue with Google</button>
          <button className="social-btn">Continue with Phone</button>
        </div>
      </div>
    </div>
  )
}
