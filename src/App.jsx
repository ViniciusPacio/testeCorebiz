import React from 'react'

import Header from "./components/Header";
import PopularProducts from './components/PopularProducts';
import Footer from './components/Footer'

import Banner from './images/Banner-1.jpg'
import LeftArrow from './images/left-arrow.png'
import RightArrow from './images/right-arrow.png'

import style from './styles/App.module.scss'

function App() {
  return (
    <>
      <Header/>
      <img src={Banner} id={style.Banner} alt="" />   
      <div className={style.bestSellers}>  
        <span>Mais Vendidos</span>
        <span id={style.line}></span>
      </div>
      <div className={style.products}>
        <img id={style.ArrowL} className={style.Arrows} src={LeftArrow} alt="" />
        <PopularProducts idProduct={0}/>
        <PopularProducts idProduct={1}/>   
        <PopularProducts idProduct={2}/>   
        <PopularProducts idProduct={3}/>  
        <img id={style.ArrowR} className={style.Arrows} src={RightArrow} alt="" />
      </div>       
      <form className={style.news} action="">
        <span>Participe de nossas news com promoções e novidades!</span>
        <div className={style.register}>          
          <input className={style.input} type="text" placeholder="Digite de nome" />
          <input className={style.input} type="text" placeholder="Digite de email"/>
          <button type="submit">Eu quero!</button>
        </div>
      </form>
      <Footer/>
    </>
  );
}

export default App;
