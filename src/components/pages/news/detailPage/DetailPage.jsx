import { Fragment } from 'react'
import style from './DetailPage.module.css'
import newimg from '../../../../assets/new2.png'
import Card from './card/Card'

const DetailPage = () => {
  return (
    <Fragment>
      <div className="container">
        <div className={style.block__title}>
          <h1>Чемпионы The International 2022</h1>
        </div>

        <div className={style.block__img}>
          <img
            src={newimg}
            alt=""
          />
        </div>

        <div className={style.block__desc}>
          <p className={style.p}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
            ornare leo ullamcorper sed tempor leo et ipsum elit. Lacus, rhoncus,
            vestibulum, parturient imperdiet pretium. Consequat sit in
            sollicitudin gravida risus egestas enim in. Enim quis id gravida
            dignissim velit. Sem amet, feugiat tincidunt aliquam ultrices nulla
            pulvinar.
          </p>

          <p className={style.pTwo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
            ornare leo ullamcorper sed tempor leo et ipsum elit. Lacus, rhoncus,
            vestibulum, parturient imperdiet pretium. Consequat sit in
            sollicitudin gravida risus egestas enim in. Enim quis id gravida
            dignissim velit
          </p>

          <p className={style.pThree}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
            ornare leo ullamcorper sed tempor leo et ipsum elit
          </p>
          <p className={style.data}>31.10.2022</p>
        </div>

        <Card />
      </div>
    </Fragment>
  )
}

export default DetailPage
