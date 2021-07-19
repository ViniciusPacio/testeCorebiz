import React from 'react';

import imgCoreBiz from '../images/site-logo-corebiz-preto-cinza.png'
import imgVtex from '../images/Vector.svg'
import iconEmail from '../images/Icon-2.svg'
import iconConsultor from '../images/Icon-1.svg'

import style from '../styles/Footer.module.scss'

export default function Footer(){
    return(
        <>
        <footer>
            <div className={style.localizacao}>
                <span id={style.title}>Localização</span>
                <span id={style.line}></span>
                <span>Avenida Andrômeda, 2000. Bloco 6 e 8</span>
                <span>Alphavile SP</span>
                <span>brasil@corebiz.ag</span>
                <span>+55 11 3090 1039</span>
            </div>

            <div className={style.contato}>
                <button id={style.buttonEmail} type="button"><img  src={iconEmail} alt="" /> Entre em contato</button>
                <button type="button"><img src={iconConsultor} alt="" />Fale com o nosso consultor online</button>
            </div>
            {/* div com created by e powered lado a lado com flex, e dps outra div com as logos lado a lado com flex  */}
            <div className={style.logos}>
                <div className={style.core}>
                    <span>Created by</span>
                    <img src={imgCoreBiz} alt="" />                                     
                </div>
                <div className={style.vtex}>                    
                    <span>Powered by</span>   
                    <img src={imgVtex} alt="" />
                </div>
            </div>
        </footer>
        </>
    )
}