import React, { useState } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import Order from './Order';

const showOrders = (props) => {
    let summa = 0
    props.orders.forEach(el => summa += Number.parseFloat(el.price));
    return (
        <div>
            {props.orders.map(el => (
                <Order onDelete={props.onDelete} key={el.id} item={el} />
            ))}
            <p className='summa'>Общая сумма покупок: {new Intl.NumberFormat().format(summa)}$</p>
        </div>
    )
}

const showNothing = () => {
    return (
        <div className='empty'>
            <h2>Корзина пуста</h2>
        </div>
    )
}

function Header(props) {
    let [shopCartOpen, setShopCartOpen] = useState(false)
  return (
    <header className='header'>
        <div>
            <span className='logo'>Snikers shop</span>
            <ul className='nav'>
                <li>Про компанию</li>
                <li>Новости</li>
                <li>Вопросы/Ответы</li>
                <li>Контакты</li>
                <li>Подарочные сертификаты</li>
            </ul>
            <AiOutlineShoppingCart onClick={() => setShopCartOpen(shopCartOpen = !shopCartOpen)} className={`shoppingCartButton ${shopCartOpen && 'active'}`} />
            {shopCartOpen && (
                <div className='cart'>
                    {props.orders.length > 0 ? showOrders(props) : showNothing()}
                </div>
            )} 

        </div>
        <div className='present'></div>
    </header>
  )
}

export default Header