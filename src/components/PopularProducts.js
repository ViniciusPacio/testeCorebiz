import React, {useState, useEffect} from 'react';

import axios from 'axios';



export default function PopularProducts(){
    const [produto, setProduto]=useState([]);

    // useEffect(()=>{
    //     axios.get('https://corebiz-test.herokuapp.com/api/v1/products').then(response=>{
    //         const array 
    //         array=response.data
    //     })
            
    // },[]);

    useEffect(()=>{
        axios.get('https://corebiz-test.herokuapp.com/api/v1/products').then(response=>{
            const products=response.data;
            let arrayProducts=[];
            products.map(product=>{
                return(
                    arrayProducts.push(product)
                )
            })
            setProduto(arrayProducts) 
                    
        })
    },[]);

    return(
        <>           
            <ul>
                {produto.map(product=>{
                    return(
                        <li key={product.productId}>teste: {product.price}</li>
                    )
                })}
            </ul>            
        </>
    )
}