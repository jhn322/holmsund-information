// Activity.js
import React, { useState, useEffect } from "react";
import styles from "../styles/Activity.module.css";

// Images
import activityImage1 from "../assets/activity1.jpg";
import activityImage2 from "../assets/activity2.jpg";
import activityImage3 from "../assets/activity3.jpg";
import activityImage4 from "../assets/activity4.jpg";
import activityImage5 from "../assets/activity5.jpg";
import activityImage6 from "../assets/activity6.jpg";
import activityImage7 from "../assets/activity7.jpg";
import activityImage8 from "../assets/activity8.jpg";

// Icons
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slideWidth = 40;

const cards = [
  {
    activityImg: {
      title: "Efren Reyes",
      desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around activityImg of all time.',
      image: activityImage1,
    },
  },
  {
    activityImg: {
      title: "Ronnie O'Sullivan",
      desc: "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful activityImg in the history of snooker.",
      image: activityImage2,
    },
  },
  {
    activityImg: {
      title: "Shane Van Boening",
      desc: 'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
      image: activityImage3,
    },
  },
  {
    activityImg: {
      title: "Mike Sigel",
      desc: 'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool activityImg with over 108 tournament wins.',
      image: activityImage4,
    },
  },
  {
    activityImg: {
      title: "Willie Mosconi",
      desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
      image: activityImage5,
    },
  },
];

const length = cards.length;
cards.push(...cards);

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, index) => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
    },
    activityImg: cards[index].activityImg,
  };

  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = { ...item.styles, filter: "grayscale(1)" };
      break;
    case length:
      break;
    default:
      item.styles = { ...item.styles, opacity: 0 };
      break;
  }

  return item;
};

const ActivitySlideItem = ({ pos, index, activeIndex }) => {
  const item = createItem(pos, index, activeIndex);

  return (
    <li className={styles.activitySlideItem} style={item.styles}>
      <div className={styles.activitySlideItemImgLink}>
        <img src={item.activityImg.image} alt={item.activityImg.title} />
      </div>
      <div className={styles.activitySlideItemBody}>
        <h4>{item.activityImg.title}</h4>
        <p>{item.activityImg.desc}</p>
      </div>
    </li>
  );
};

const keys = Array.from(Array(cards.length).keys());

const Activity = () => {
  const [card, setcard] = useState(keys);
  const [isTicking, setIsTicking] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const bigLength = card.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setcard((prev) => prev.map((_, i) => prev[(i + jump) % bigLength]));
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setcard((prev) =>
        prev.map((_, i) => prev[(i - jump + bigLength) % bigLength])
      );
    }
  };

  const handleDotClick = (index) => {
    if (index < activeIndex) prevClick(activeIndex - index);
    if (index > activeIndex) nextClick(index - activeIndex);
  };

  useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  useEffect(() => {
    setActiveIndex((length - (card[0] % length)) % length); // prettier-ignore
  }, [card]);

  return (
    <div className={styles.activityContainer}>
      <div className={styles.activityInner}>
        <button
          className={`${styles.activityBtn} ${styles.activityBtnPrev}`}
          onClick={() => prevClick()}
        >
          <FaChevronLeft
            className={`${styles.activityBtnArrow} ${styles.activityBtnArrowLeft}`}
          />
        </button>
        <div className={styles.activityWrap}>
          <ul className={styles.activitySlideList}>
            {card.map((pos, i) => (
              <ActivitySlideItem
                key={i}
                index={i}
                pos={pos}
                activeIndex={activeIndex}
              />
            ))}
          </ul>
        </div>
        <button
          className={`${styles.activityBtn} ${styles.activityBtnNext}`}
          onClick={() => nextClick()}
        >
          <FaChevronRight
            className={`${styles.activityBtnArrow} ${styles.activityBtnArrowRight}`}
          />
        </button>
        <div className={styles.activityDots}>
          {card.slice(0, length).map((pos, i) => (
            <span
              key={i}
              onClick={() => handleDotClick(i)}
              className={`${styles.dot} ${
                i === activeIndex ? styles.dotActive : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activity;
