import style from './Battle.module.css'
import voin from '../../../assets/img/voin.png'

const Battle = () => {
  return (
    <section id={style.news}>
      <div className="container">
        <div className={style.news}>
          <div className={style.card}>
            <div className={style.card__img}>
              <img
                src={voin}
                alt=""
              />
            </div>

            <div className={style.card__text}>
              <h1 className={style.title}>Lorem ipsum dolor sit amet</h1>
              <p className={style.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                aliquet arcu ante praesent arcu. Congue gravida metus vulputate
                volutpat. quisque .
              </p>
            </div>

            <div className={style.data}>
              <span>02.11.2022</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Battle
