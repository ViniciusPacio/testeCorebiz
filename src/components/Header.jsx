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
                <input type="text" placeholder="O que está procurando?" />
                <img src={magGlassIcon} alt="" />
                <img src={userIcon} alt="" />
                <span>Minha conta</span>
                <img src={shoppingCartIcon} alt="" />
            </div>
        </>
    )
}