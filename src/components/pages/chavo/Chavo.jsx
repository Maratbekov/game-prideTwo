import { Fragment, useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import style from "./Chavo.module.css";

const Chavo = () => {
  const data = [
    {
      id: 1,
      question: "How dis we do this Bookmaker review?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Laoreet auctor nibh viverra amet pulvinar eu tempor id. Mauris egestas tempor sed cursus pellentesque sed in mollis lectus. Id diam congue sollicitudin dictumst dui velit. ",
    },

    {
      id: 2,
      question: "How dis we do this Bookmaker review?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Laoreet auctor nibh viverra amet pulvinar eu tempor id. Mauris egestas tempor sed cursus pellentesque sed in mollis lectus. Id diam congue sollicitudin dictumst dui velit. ",
    },

    {
      id: 3,
      question: "Can bettors in the US acccess the sportsbook?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Laoreet auctor nibh viverra amet pulvinar eu tempor id. Mauris egestas tempor sed cursus pellentesque sed in mollis lectus. Id diam congue sollicitudin dictumst dui velit. ",
    },

    {
      id: 4,
      question: "Can bettors in the US acccess the sportsbook?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Laoreet auctor nibh viverra amet pulvinar eu tempor id. Mauris egestas tempor sed cursus pellentesque sed in mollis lectus. Id diam congue sollicitudin dictumst dui velit. ",
    },

    {
      id: 5,
      question: "Can bettors in the US acccess the sportsbook?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Laoreet auctor nibh viverra amet pulvinar eu tempor id. Mauris egestas tempor sed cursus pellentesque sed in mollis lectus. Id diam congue sollicitudin dictumst dui velit. ",
    },
  ];


  const dataTwo = [
    {
      id: 1,
      question: "How dis we do this Bookmaker review?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Laoreet auctor nibh viverra amet pulvinar eu tempor id. Mauris egestas tempor sed cursus pellentesque sed in mollis lectus. Id diam congue sollicitudin dictumst dui velit. ",
    },

    {
      id: 2,
      question: "How dis we do this Bookmaker review?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Laoreet auctor nibh viverra amet pulvinar eu tempor id. Mauris egestas tempor sed cursus pellentesque sed in mollis lectus. Id diam congue sollicitudin dictumst dui velit. ",
    },

    {
      id: 3,
      question: "Can bettors in the US acccess the sportsbook?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Laoreet auctor nibh viverra amet pulvinar eu tempor id. Mauris egestas tempor sed cursus pellentesque sed in mollis lectus. Id diam congue sollicitudin dictumst dui velit. ",
    },

    {
      id: 4,
      question: "Can bettors in the US acccess the sportsbook?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Laoreet auctor nibh viverra amet pulvinar eu tempor id. Mauris egestas tempor sed cursus pellentesque sed in mollis lectus. Id diam congue sollicitudin dictumst dui velit. ",
    },

    {
      id: 5,
      question: "Can bettors in the US acccess the sportsbook?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Laoreet auctor nibh viverra amet pulvinar eu tempor id. Mauris egestas tempor sed cursus pellentesque sed in mollis lectus. Id diam congue sollicitudin dictumst dui velit. ",
    },
  ];

  const [selected, setSelected] = useState(null);

  const [selectedTwo, setSelectedTwo] = useState(null);


  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  const toggleTwo = (idx) => {
    if (selectedTwo === idx) {
      return setSelectedTwo(null);
    }

    setSelectedTwo(idx);
  };

  return (
    <Fragment>
     <div className="container">
      <h1 className={style.title}>Часто задаваемые вопросы</h1>
     <div className={style.accordion}>
              <div>
              {data.map((item, i) => (
                <div className={style.item}>
                  <div className={style.titlle} onClick={() => toggle(i)}>
                    <span>{selected === i ? <FaMinus/> : <FaPlus/>}</span>
                    <h3>{item.question}</h3>
                  </div>

                  <div className={selected === i ? `${style.content} ${style.show}` : `${style.content}`}>
                    {item.answer}
                  </div>
                </div>
              ))}
              </div>


              <div>
              {dataTwo.map((el, idx) => (
                <div className={style.item}>
                  <div className={style.titlle} onClick={() => toggleTwo(idx)}>
                    <span>{selectedTwo === idx ? <FaMinus/> : <FaPlus/>}</span>
                    <h3>{el.question}</h3>
                  </div>

                  <div className={selectedTwo === idx ? `${style.content} ${style.show}` : `${style.content}` }>
                    {el.answer}
                  </div>
                </div>
              ))}
              </div>
            </div>
     </div>
    </Fragment>
  );
};

export default Chavo;
