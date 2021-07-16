import React from 'react'

import Header from "./components/Header";
import PopularProducts from './components/PopularProducts';

import Banner from './images/Banner-1.jpg'

import style from './styles/App.module.scss'

function App() {
  return (
    <>
      <Header/>
      <img src={Banner} id={style.Banner} alt="" />
      <span>Mais vendidos</span>
      <span id={style.line}>line</span>
      <PopularProducts/>
    </>
  );
}

export default App;
