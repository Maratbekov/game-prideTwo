import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'
import style from './News.module.css'
import newsImg from '../../../assets/news.png'
import newsImg2 from '../../../assets/news2.png'
import newsImg3 from '../../../assets/news3.png'
import newsImg4 from '../../../assets/news4.png'

// import backgroundImgDetailpage from '../../../assets/detailPage.png'

const News = () => {
  

  const data = [
    {
      id: 1,
      image: `${newsImg}`,
      title: 'Чемпионы  The International 2022',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod lorem in bibendum mi posuere. In commodo quam sollicitudin eget scelerisque amet id. Quis malesuada enim fermentum nec tempus ornare. In quisque nisl nec sed diam non.Quis malesuada enim fermentum.   ',
      date: '31.10.2022',
      btn: 'Читать далее',
    },
    {
      id: 2,
      image: `${newsImg2}`,
      title: 'Чемпионы  The International 2022',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod lorem in bibendum mi posuere. In commodo quam sollicitudin eget scelerisque amet id. Quis malesuada enim fermentum nec tempus ornare. In quisque nisl nec sed diam non.Quis malesuada enim fermentum.   ',
      date: '31.10.2022',
      btn: 'Читать далее',
    },

    {
      id: 3,
      image: `${newsImg3}`,
      title: 'Чемпионы  The International 2022',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod lorem in bibendum mi posuere. In commodo quam sollicitudin eget scelerisque amet id. Quis malesuada enim fermentum nec tempus ornare. In quisque nisl nec sed diam non.Quis malesuada enim fermentum.   ',
      date: '31.10.2022',
      btn: 'Читать далее',
    },

    {
      id: 4,
      image: `${newsImg4}`,
      title: 'Чемпионы  The International 2022',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod lorem in bibendum mi posuere. In commodo quam sollicitudin eget scelerisque amet id. Quis malesuada enim fermentum nec tempus ornare. In quisque nisl nec sed diam non.Quis malesuada enim fermentum.   ',
      date: '31.10.2022',
      btn: 'Читать далее',
    },

    {
      id: 5,
      image: `${newsImg}`,
      title: 'Чемпионы  The International 2017',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod lorem in bibendum mi posuere. In commodo quam sollicitudin eget scelerisque amet id. Quis malesuada enim fermentum nec tempus ornare. In quisque nisl nec sed diam non.Quis malesuada enim fermentum.   ',
      date: '31.10.2017',
      btn: 'Читать далее',
    },

    {
      id: 5,
      image: `${newsImg2}`,
      title: 'Чемпионы  The International 2018',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod lorem in bibendum mi posuere. In commodo quam sollicitudin eget scelerisque amet id. Quis malesuada enim fermentum nec tempus ornare. In quisque nisl nec sed diam non.Quis malesuada enim fermentum.   ',
      date: '31.10.2018',
      btn: 'Читать далее',
    },
    {
      id: 6,
      image: `${newsImg4}`,
      title: 'Чемпионы  The International 2022',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod lorem in bibendum mi posuere. In commodo quam sollicitudin eget scelerisque amet id. Quis malesuada enim fermentum nec tempus ornare. In quisque nisl nec sed diam non.Quis malesuada enim fermentum.   ',
      date: '31.10.2022',
      btn: 'Читать далее',
    },
    {
      id: 7,
      image: `${newsImg2}`,
      title: 'Чемпионы  The International 2022',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod lorem in bibendum mi posuere. In commodo quam sollicitudin eget scelerisque amet id. Quis malesuada enim fermentum nec tempus ornare. In quisque nisl nec sed diam non.Quis malesuada enim fermentum.   ',
      date: '31.10.2022',
      btn: 'Читать далее',
    },
    {
      id: 8,
      image: `${newsImg}`,
      title: 'Чемпионы  The International 2022',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod lorem in bibendum mi posuere. In commodo quam sollicitudin eget scelerisque amet id. Quis malesuada enim fermentum nec tempus ornare. In quisque nisl nec sed diam non.Quis malesuada enim fermentum.   ',
      date: '31.10.2022',
      btn: 'Читать далее',
    },
  ]

  const quantityPageRef = useRef(4)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [endPosition, setEndPosition] = useState(4)

  const handlePagination = (index) => {
    setEndPosition((index + 1) * quantityPageRef.current)
    setCurrentIndex(
      (index + 1) * quantityPageRef.current - quantityPageRef.current
    )
  } 

  const handlePrev = () => {
    if (currentIndex) {
      setCurrentIndex(currentIndex - quantityPageRef.current)
      setEndPosition(endPosition - quantityPageRef.current)
    }
  }

  const handleNext = () => {
    if (endPosition < data.length) {
      setCurrentIndex(currentIndex + quantityPageRef.current)
      setEndPosition(endPosition + quantityPageRef.current)
    }
  } 
  

  return (
    <Fragment>
      <div className="container">
        <h1 className={style.title}>Новости</h1>

        {data.slice(currentIndex, endPosition).map((item) => (
          <div className={style.card}>
            <div className={style.card__img}>
              <img
                src={item.image}
                alt={item.title}
              />
            </div>

            <div className={style.card__text}>
              <h2 className={style.card__title}>{item.title}</h2>
              <p className={style.card__desc}>{item.desc}</p>
              <span className={style.data}>{item.date}</span>
              <Link
                to={`/news/detail-page/${item.id}`}
                className={style.card__link}
                
              >
                {item.btn}
              </Link>
            </div>
          </div>
        ))}

        <div className={style.items__center}>
          <button
            className={style.btnPaginate}
            onClick={handlePrev}
          >
            <FaChevronLeft />
          </button>
          {Array(Math.ceil(data.length / quantityPageRef.current))
            .fill(null)
            .map((_, index) => (
              <button
                className={`${style.btnPaginate} ${
                  currentIndex === 0 && index === currentIndex
                    ? `${style.active}`
                    : index === currentIndex / quantityPageRef.current &&
                      `${style.active}`
                }`}
                onClick={() => handlePagination(index)}
              >
                {index + 1}
              </button>
            ))}
          <button
            className={style.btnPaginate}
            onClick={handleNext}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default News
