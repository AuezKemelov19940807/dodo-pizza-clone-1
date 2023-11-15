'use client'

import { IoClose } from 'react-icons/io5'
import CartEmpty from './CartEmpty'
import { useAppDispatch, useAppSelector } from '@/globalRedux/hooks/hooks'
import { toggleModal } from '@/globalRedux/features/cart/cartSlice'
import { useEffect, useRef } from 'react'
import CartItems from './CartItems'
const Cart = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { openModal, items } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (openModal) {
      document.body.classList.add('open-modal-show')
    } else {
      document.body.classList.remove('open-modal-show')
    }
  })

  const handleClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      dispatch(toggleModal(false))
    }
  }

  useEffect(() => {
    document.addEventListener('mouseup', handleClick)

    return () => document.removeEventListener('mouseleave', handleClick)
  })

  return (
    <div
      className={`${
        openModal &&
        'fixed w-screen h-screen z-50 bg-black/60 transition-all duration-500'
      }`}
    >
      <div
        className={`fixed  top-0 ${
          openModal ? 'right-0' : '-right-full'
        }  bg-white z-50 h-screen min-w-[420px]  transition-all duration-500 `}
        ref={ref}
      >
        <div className="absolute -left-[60px] top-[50%] -translate-y-[50%]   z-50 text-white">
          <button onClick={() => dispatch(toggleModal(false))}>
            <IoClose className="w-[50px] h-[50px] transition-all duration-500 hover:rotate-180" />{' '}
          </button>
        </div>
        {items.length > 0 ? <CartItems /> : <CartEmpty />}
      </div>
    </div>
  )
}

export default Cart
