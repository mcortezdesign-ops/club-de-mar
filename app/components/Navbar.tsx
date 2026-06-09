'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import s from '../page.module.css'

const WHATSAPP = '5491164034993'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 40) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header>
      <nav
        className={`${s.nav} ${scrolled ? s.navScrolled : ''}`}
        aria-label="Navegación principal"
      >
        <div className={s.navInner}>
          <a href="#inicio" aria-label="Club de Mar — Inicio">
            <Image
              src="/CLUBDEMAR_AZUL_GRIS.png"
              alt="Club de Mar"
              width={160}
              height={44}
              priority
              className={s.navLogo}
            />
          </a>
          <ul className={s.navLinks}>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#destacados">Destacados</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#packs">Packs</a></li>
            <li><a href="#recetas">Recetas</a></li>
            <li><a href="#quienes-somos">Quiénes Somos</a></li>
          </ul>
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hola, me gustaría hacer un pedido en Club de Mar.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className={s.navCta}
          >
            Hacer un pedido
          </a>
        </div>
      </nav>
    </header>
  )
}
