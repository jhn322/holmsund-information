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
      title: "Första aktiviteten",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eius nemo, deserunt voluptates sint aliquam. Porro corrupti, ullam repellat, sunt, aliquid quos recusandae assumenda ut voluptatum in omnis non voluptatem?",
      image: activityImage1,
    },
  },
  {
    activityImg: {
      title: "Andra aktiviteten",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eius nemo, deserunt voluptates sint aliquam. Porro corrupti, ullam repellat, sunt, aliquid quos recusandae assumenda ut voluptatum in omnis non voluptatem?",
      image: activityImage2,
    },
  },
  {
    activityImg: {
      title: "Tredje aktiviteten",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eius nemo, deserunt voluptates sint aliquam. Porro corrupti, ullam repellat, sunt, aliquid quos recusandae assumenda ut voluptatum in omnis non voluptatem?",
      image: activityImage3,
    },
  },
  {
    activityImg: {
      title: "Fjärde aktiviteten",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eius nemo, deserunt voluptates sint aliquam. Porro corrupti, ullam repellat, sunt, aliquid quos recusandae assumenda ut voluptatum in omnis non voluptatem?",
      image: activityImage4,
    },
  },
  {
    activityImg: {
      title: "Femte aktiviteten",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eius nemo, deserunt voluptates sint aliquam. Porro corrupti, ullam repellat, sunt, aliquid quos recusandae assumenda ut voluptatum in omnis non voluptatem?",
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
