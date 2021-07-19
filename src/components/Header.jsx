import React, { useContext, useEffect } from 'react'

import logo from '../images/logo-corebiz-preto-cinza.png'
import userIcon from '../images/user 1.svg'
import shoppingCartIcon from '../images/shopping-cart 1.svg'
import iconMenu from '../images/Icon.svg'

import style from '../styles/Header.module.scss'

import { AuthContext } from '../contexts/Compra'

export default function Header(){

    const {qtProduct,setQtProduct} = useContext(AuthContext);

    useEffect(()=>{
        let items;
        items=localStorage.getItem('counter')
        if(items!==null){
            items=JSON.parse(items)
            setQtProduct(items)
        }
    },[])

    return (
        <>
            <div className={style.Header}>
                <img id={style.iconMenu} src={iconMenu} alt="" />
                <img src={logo} id={style.logo} alt="" />
                <div className={style.search}>
                    <input type="text" placeholder="O que está procurando?" />
                </div>
                <img src={userIcon} id={style.user} alt="" />
                <span>Minha conta</span>
                <img src={shoppingCartIcon} id={style.shoppingCart} alt="" />
                <span id={style.counter}>{qtProduct}</span>
            </div>
        </>
    )
}