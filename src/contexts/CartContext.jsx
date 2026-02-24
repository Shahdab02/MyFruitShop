import React, { createContext, useState, useContext, useEffect } from 'react'

const CartContext = createContext()

export function CartProvider({ children }){
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem('cart')) || [] } catch { return [] }
  })

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(items))
  },[items])

  const add = (product) => {
    setItems(prev => {
      const found = prev.find(p=>p.id===product.id)
      if(found) return prev.map(p=>p.id===product.id?{...p,qty:p.qty+1}:p)
      return [...prev, {...product, qty:1}]
    })
  }
  const remove = (id) => setItems(prev => prev.filter(p=>p.id!==id))
  const clear = ()=> setItems([])

  const total = items.reduce((s,p)=>s + p.price * p.qty, 0)
  const count = items.reduce((s,p)=>s + p.qty, 0)

  return (
    <CartContext.Provider value={{ items, add, remove, clear, total, count }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart(){
  return useContext(CartContext)
}
