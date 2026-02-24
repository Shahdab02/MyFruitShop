import React, { useEffect, useState } from 'react'
import './orders.css'

export default function Orders(){
  const [orders, setOrders] = useState([])

  useEffect(()=>{
    try{
      const saved = JSON.parse(localStorage.getItem('orders')) || []
      setOrders(saved)
    }catch{ setOrders([]) }
  },[])

  return (
    <div className="container">
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <div className="small">You have no orders yet. Start shopping!</div>
      ) : (
        <ul className="orders-list">
          {orders.map((o,idx)=> (
            <li key={idx} className="product">
              <div><strong>Order #{o.id || (1000+idx)}</strong></div>
              <div className="small">{o.items?.length || 0} items — {o.total || '₹0'}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
