import React, { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import './settings.css'

export default function Settings(){
  const { user, login } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [msg, setMsg] = useState('')

  useEffect(()=>{
    try{
      const p = JSON.parse(localStorage.getItem('profile'))
      if(p){ setName(p.name||''); setEmail(p.email||''); setAddress(p.address||'') }
      else if(user) setName(user.name||'')
    }catch{}
  },[user])

  const save = (e)=>{
    e.preventDefault()
    const profile = { name, email, address }
    try{ localStorage.setItem('profile', JSON.stringify(profile)); login(name); setMsg('Saved') }catch{ setMsg('Failed to save') }
    setTimeout(()=>setMsg(''),2500)
  }

  return (
    <div className="container">
      <div className="account-card">
        <h2>Account settings</h2>
        <form className="auth-form" onSubmit={save}>
          <label>Name<input value={name} onChange={e=>setName(e.target.value)} /></label>
          <label>Email<input value={email} onChange={e=>setEmail(e.target.value)} /></label>
          <label>Address<input value={address} onChange={e=>setAddress(e.target.value)} placeholder="Your delivery address" /></label>
          <div style={{display:'flex',gap:8}}>
            <button className="button" type="submit">Save</button>
            <span className="small" style={{alignSelf:'center'}}>{msg}</span>
          </div>
        </form>
      </div>
    </div>
  )
}
