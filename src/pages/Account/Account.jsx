import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import './account.css'

export default function Account(){
  const { user } = useAuth()
  const profile = (()=>{ try{ return JSON.parse(localStorage.getItem('profile')) }catch{return null} })()

  return (
    <div className="container">
      <div className="account-card">
        <h2>My Account</h2>
        <p className="small">Welcome back{user ? `, ${user.name}` : ''}.</p>

        {profile && (
          <div style={{marginTop:8}}>
            <strong>{profile.name}</strong>
            <div className="small">{profile.email}</div>
          </div>
        )}

        <div style={{marginTop:16,display:'flex',gap:12}}>
          <Link to="/settings" className="button ghost">Settings</Link>
          <Link to="/orders" className="button">My Orders</Link>
        </div>
      </div>
    </div>
  )
}
