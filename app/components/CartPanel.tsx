'use client'

import { useState } from 'react'
import s from '../page.module.css'
import { useCart } from './CartContext'

const WHATSAPP = '5491164034993'

export function CartPanel() {
  const [open, setOpen] = useState(false)
  const [note, setNote] = useState('')
  const { items, updateQty, removeItem } = useCart()

  const totalQty = items.reduce((acc, i) => acc + i.quantity, 0)

  function buildMessage() {
    let msg = 'Hola, me gustaría hacer el siguiente pedido en Club de Mar:\n\n'
    items.forEach(i => { msg += `• ${i.name} — ${i.quantity} kg\n` })
    if (note.trim()) msg += `\nNota: ${note.trim()}`
    return encodeURIComponent(msg)
  }

  return (
    <>
      <button
        className={s.cartFab}
        onClick={() => setOpen(true)}
        aria-label="Ver pedido"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        {totalQty > 0 && <span className={s.cartFabBadge}>{totalQty}</span>}
      </button>

      {open && (
        <div
          className={s.cartBackdrop}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={`${s.cartPanel} ${open ? s.cartPanelOpen : ''}`}
        role="dialog"
        aria-label="Tu pedido"
        aria-modal="true"
      >
        <div className={s.cartHeader}>
          <h2 className={s.cartTitle}>Tu pedido</h2>
          <button
            className={s.cartClose}
            onClick={() => setOpen(false)}
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <p className={s.cartEmpty}>Todavía no agregaste productos.<br />Usá el botón "Agregar al pedido" en cada producto.</p>
        ) : (
          <ul className={s.cartItems}>
            {items.map(item => (
              <li key={item.id} className={s.cartItem}>
                <div className={s.cartItemInfo}>
                  <span className={s.cartItemName}>{item.name}</span>
                  <span className={s.cartItemPrice}>{item.price}</span>
                </div>
                <div className={s.cartItemQty}>
                  <button
                    className={s.qtyBtn}
                    onClick={() => updateQty(item.id, -1)}
                    aria-label={`Reducir cantidad de ${item.name}`}
                  >−</button>
                  <span className={s.qtyVal}>{item.quantity} kg</span>
                  <button
                    className={s.qtyBtn}
                    onClick={() => updateQty(item.id, 1)}
                    aria-label={`Aumentar cantidad de ${item.name}`}
                  >+</button>
                  <button
                    className={s.cartItemRemove}
                    onClick={() => removeItem(item.id)}
                    aria-label={`Quitar ${item.name}`}
                  >✕</button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className={s.cartNote}>
          <label htmlFor="cart-note" className={s.cartNoteLabel}>Nota especial</label>
          <textarea
            id="cart-note"
            className={s.cartNoteInput}
            placeholder='Ej: "sin espinas", "entregar después de las 18hs"'
            value={note}
            onChange={e => setNote(e.target.value)}
            rows={3}
          />
        </div>

        {items.length > 0 && (
          <a
            href={`https://wa.me/${WHATSAPP}?text=${buildMessage()}`}
            target="_blank"
            rel="noopener noreferrer"
            className={s.cartSendBtn}
            onClick={() => setOpen(false)}
          >
            Enviar pedido por WhatsApp
          </a>
        )}
      </div>
    </>
  )
}
