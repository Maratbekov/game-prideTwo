import style from './Home.module.css'
import ramkaImg from '../../../assets/img/ramkaImg.png'
import ramkaImg2 from '../../../assets/img/ramkaImg2.png'
import ramkaImg3 from '../../../assets/img/ramkaImg3.png'

const Home = () => {
  return (
    <section id={style.benefits}>
      <div className="container">
        <div className={style.benefits}>
          <div className={style.card}>
            <img
              src={ramkaImg}
              alt=""
            />
            <div className={style.number}>01</div>
            <div className={style.title}>Техническая поддержка игроков</div>
            <div className={style.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit senectus
              in nunc .
            </div>
          </div>

          <div className={style.card}>
            <img
              src={ramkaImg2}
              alt=""
            />
            <div className={style.number}>02</div>
            <div className={style.title}>Техническая поддержка игроков</div>
            <div className={style.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit senectus
              in nunc .
            </div>
          </div>

          <div className={style.card}>
            <img
              src={ramkaImg3}
              alt=""
            />
            <div className={style.number}>03</div>
            <div className={style.title}>Техническая поддержка игроков</div>
            <div className={style.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit senectus
              in nunc .
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
