import React from 'react'
import style from './Card.module.css'
import tank from '../../../../../assets/tank.png'
import battl from '../../../../../assets/battle.png'
import csgo from '../../../../../assets/csgo.png'

const Card = () => {
  return (
    <section id={style.cards}>
       <div className="container">
        <h1 className={style.title}>Другие новости</h1>
        <div className={style.d_flex}>

        <div className={style.box}>
         <div className={style.card}>
            <img src={tank} alt="" />
            <h3>Чемпионы  The International 2022</h3>
         </div>
         <span className={style.data}>31.10.2022</span>
        </div>


        <div className={style.box}>
         <div className={style.card}>
            <img src={battl} alt="" />
            <h3>Чемпионы  The International 2022</h3>
         </div>
         <span className={style.data}>31.10.2022</span>
        </div>


        <div className={style.box}>
         <div className={style.card}>
            <img src={csgo} alt="" />
            <h3>Чемпионы  The International 2022</h3>
         </div>
         <span className={style.data}>31.10.2022</span>
        </div>

        </div>
       </div>
    </section>
  )
}

export default Card