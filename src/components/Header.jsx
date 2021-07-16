import React from 'react'

import logo from '../images/logo-corebiz-preto-cinza.png'
import magGlassIcon from '../images/magnifying-glass 1.svg'
import userIcon from '../images/user 1.svg'
import shoppingCartIcon from '../images/shopping-cart 1.svg'

import style from '../styles/Header.module.scss'

export default function Header(){
    return (
        <>
            <div className={style.Header}>
                <img src={logo} id={style.logo} alt="" />
                <div className={style.search}>
                <input type="text" placeholder="O que está procurando?" />
                <img src={magGlassIcon} id={style.magGlass} alt="" />
                </div>
                <img src={userIcon} id={style.user} alt="" />
                <span>Minha conta</span>
                <img src={shoppingCartIcon} id={style.shoppingCart} alt="" />
            </div>
        </>
    )
}