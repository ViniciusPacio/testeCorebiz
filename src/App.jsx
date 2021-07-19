import React from 'react'

import Header from "./components/Header";
import PopularProducts from './components/PopularProducts';
import Footer from './components/Footer'

import Banner from './images/Banner-1.jpg'
import LeftArrow from './images/left-arrow.png'
import RightArrow from './images/right-arrow.png'

import style from './styles/App.module.scss'

import { useForm } from 'react-hook-form';

import axios from 'axios';

function App() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => axios.post(`https://jsonplaceholder.typicode.com/users`, { data }).then(res => {
    console.log(res);
    console.log(res.data);
  })

  return (
    <>
      <Header />
      <img src={Banner} id={style.Banner} alt="" />
      <div className={style.bestSellers}>
        <span>Mais Vendidos</span>
        <span id={style.line}></span>
      </div>
      <div className={style.products}>
        <img id={style.ArrowL} className={style.Arrows} src={LeftArrow} alt="" />
        <PopularProducts idProduct={0} />
        <PopularProducts idProduct={1} />
        <PopularProducts idProduct={2} />
        <PopularProducts idProduct={3} />
        <img id={style.ArrowR} className={style.Arrows} src={RightArrow} alt="" />
      </div>
      <div className={style.news}>
        <span>Participe de nossas news com promoções e novidades!</span>
        <form className={style.register} onSubmit={handleSubmit(onSubmit)}>
          <input className={style.name} name='name' placeholder="Digite seu nome" type="text" {...register('name', { required: true })}
          />
          {errors.name && <p id={style.errorName}>Esse campo é obrigatório</p>}
          <input className={style.email} name='email' placeholder="Digite seu email" type="email" {...register('email', { required: true })} />
          {errors.email && <p id={style.errorEmail}>Esse campo é obrigatório</p>}
          <button type="submit">Eu quero!</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default App;
