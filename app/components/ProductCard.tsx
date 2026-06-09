'use client'

import Image from 'next/image'
import { useState } from 'react'
import type { Product } from '../lib/types'
import s from '../page.module.css'
import { useCart } from './CartContext'

const WHATSAPP = '5491164034993'

export function ProductCard({ product }: { product: Product }) {
  const [activeImg, setActiveImg] = useState(0)
  const { items, addItem, removeItem } = useCart()
  const inCart = items.some(i => i.id === product.id)

  return (
    <article className={s.productCard}>
      <div className={s.productImgWrap}>
        {activeImg === 0 && product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={s.productImg}
          />
        ) : (
          <div className={s.productImgPlaceholder} aria-hidden="true">
            <span>{activeImg === 0 ? product.name : `Foto ${activeImg + 1}`}</span>
          </div>
        )}
        <div className={s.productBadges}>
          <span className={s.productBadge}>{product.type}</span>
          <span className={s.productBadge}>{product.unit}</span>
        </div>
      </div>

      <div className={s.productGalleryThumbs}>
        {[0, 1, 2].map(i => (
          <button
            key={i}
            className={`${s.galleryThumb} ${activeImg === i ? s.galleryThumbActive : ''}`}
            onClick={() => setActiveImg(i)}
            aria-label={`Ver imagen ${i + 1}`}
          >
            {i === 0 && product.image ? (
              <Image
                src={product.image}
                alt={`${product.name} miniatura`}
                fill
                sizes="68px"
                className={s.galleryThumbImg}
              />
            ) : (
              <span className={s.galleryThumbLabel}>Foto {i + 1}</span>
            )}
          </button>
        ))}
      </div>

      <div className={s.productBody}>
        <h3 className={s.productName}>{product.name}</h3>
        <p className={s.productDesc}>{product.description}</p>
        <p className={s.productPrice}>{product.price}</p>

        <div className={s.productDivider} />
        <p className={s.productMicroLabel}>Valores nutricionales</p>
        <ul className={s.nutritionList}>
          {product.nutrition.map(n => <li key={n}>{n}</li>)}
        </ul>

        <div className={s.productDivider} />
        <p className={s.productMicroLabel}>Cómo prepararlo</p>
        <ul className={s.cookingList}>
          {product.cooking.map(c => <li key={c}>{c}</li>)}
        </ul>
      </div>

      <div className={s.productFooter}>
        <button
          className={`${s.addToCartBtn} ${inCart ? s.addToCartBtnAdded : ''}`}
          onClick={() => inCart ? removeItem(product.id) : addItem(product.id, product.name, product.price)}
        >
          {inCart ? '✓ En el pedido' : '+ Agregar al pedido'}
        </button>
        <a
          href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hola, quiero pedir ${product.name} de Club de Mar. ¿Pueden confirmar disponibilidad?`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={s.waBtn}
          aria-label={`Pedir ${product.name} por WhatsApp`}
        >
          Pedir por WhatsApp
        </a>
      </div>
    </article>
  )
}
