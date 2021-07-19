import React, {useState, useEffect,useContext} from 'react';

import axios from 'axios';

import style from '../styles/PopularProducts.module.scss'

import Star from '../images/star.svg'
import Star2 from '../images/star2.svg'

import {AuthContext} from '../contexts/Compra'



//useEffect em arquivo separado, importando em cada card que for feito
//
export default function PopularProducts(props){
    const [product, setProduct]=useState([]);

    const {qtProduct, setQtProduct}=useContext(AuthContext);

    function increment(){
        setQtProduct(qtProduct+1)
        localStorage.setItem('counter',JSON.stringify(qtProduct+1))
    }

    function Rating(){
        let i;
        let idStar=100;
        let idStar2=200;
        let idSpan=500;
        const qtdStars=product[props.idProduct]?.stars;
        const stars=[];
        for(i=1;i<=5;i++){
            if(i<=qtdStars){
                stars.push(<span key={idStar}>{<img src={Star} alt=""/>}</span>)
                idStar+=1;
            }else{
                stars.push(<span key={idStar2}><img src={Star2} alt=""/></span>)   
                idStar2+=1;             
            }
        }
        return(stars.map(data=>{
            idSpan+=1;
            return(
                <span key={idSpan}>{data}</span>
            )
        }))
    }


    useEffect(()=>{
        axios.get('https://corebiz-test.herokuapp.com/api/v1/products').then(response=>setProduct(response.data))
            .catch((err)=>{
                console.error("erro"+ err)
            })



            // let teste;
            // let array
            // teste=JSON.stringify(product[props.idProduct]?.price)
 
    },[]);

    return(     
        <>
            <div className={style.products}>
                <div className={style.card}>
                    <img src={product[props.idProduct]?.imageUrl} alt="" />
                    <div className={style.item} key={product[props.idProduct]?.id}>                
                        <span id={style.name}>{product[props.idProduct]?.productName}</span>
                        <span id={style.rating}><Rating></Rating></span>
                        { product[props.idProduct]?.listPrice ?( 
                            <span id={style.listPrice}>De R$ {product[props.idProduct]?.listPrice}</span>
                        ):(
                            <span></span>
                        )}
                        <span id={style.price}>por: R$ {product[props.idProduct]?.price}</span>
                        {product[props.idProduct]?.installments[0]?.value ? (
                            <span id={style.price2}>Ou em {product[props.idProduct]?.installments[0]?.quantity}x de R$ {product[props.idProduct]?.installments[0]?.value}</span>
                        ):( 
                            <span></span>
                        )}
                        <div>
                        <button onClick={increment}>Comprar</button>
                        </div>
                    </div>   
                </div>
            </div>
        </>
    )
}