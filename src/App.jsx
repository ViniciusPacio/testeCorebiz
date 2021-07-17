import React from 'react'

import Header from "./components/Header";
import PopularProducts from './components/PopularProducts';
import Footer from './components/Footer'

import Banner from './images/Banner-1.jpg'

import style from './styles/App.module.scss'

function App() {
  return (
    <>
      <Header/>
      <img src={Banner} id={style.Banner} alt="" />   
      <PopularProducts/>      
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
