import { useState } from "react";
import { NavLink } from "react-router-dom";

// Icons
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// CSS
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

// Cards Data
const cards = [
  {
    image: activityImage1,
    title: "Aqua Arena",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam placeat possimus atque, modi minima saepe, ex odio aliquam cumque quis officia cupiditate vitae at dicta amet. Tenetur enim nihil dolores.",
  },
  {
    image: activityImage2,
    title: "Vattentornet",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam placeat possimus atque, modi minima saepe, ex odio aliquam cumque quis officia cupiditate vitae at dicta amet. Tenetur enim nihil dolores.",
  },
  {
    image: activityImage3,
    title: "Golfbana",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam placeat possimus atque, modi minima saepe, ex odio aliquam cumque quis officia cupiditate vitae at dicta amet. Tenetur enim nihil dolores.",
  },
  {
    image: activityImage4,
    title: "Storsjöhallen",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam placeat possimus atque, modi minima saepe, ex odio aliquam cumque quis officia cupiditate vitae at dicta amet. Tenetur enim nihil dolores.",
  },
  {
    image: activityImage5,
    title: "Nästa ställe",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam placeat possimus atque, modi minima saepe, ex odio aliquam cumque quis officia cupiditate vitae at dicta amet. Tenetur enim nihil dolores.",
  },
  {
    image: activityImage6,
    title: "Utflykt",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam placeat possimus atque, modi minima saepe, ex odio aliquam cumque quis officia cupiditate vitae at dicta amet. Tenetur enim nihil dolores.",
  },
  {
    image: activityImage7,
    title: "Skidspår",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam placeat possimus atque, modi minima saepe, ex odio aliquam cumque quis officia cupiditate vitae at dicta amet. Tenetur enim nihil dolores.",
  },
  {
    image: activityImage8,
    title: "Stor skog",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam placeat possimus atque, modi minima saepe, ex odio aliquam cumque quis officia cupiditate vitae at dicta amet. Tenetur enim nihil dolores.",
  },
];

// Card Component
const Card = ({ image, title, text }) => {
  const hideText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardText}>
        <h2 className={styles.cardTitle}>{title}</h2>
      </div>
      <img src={image} alt={title} />
      <div className={styles.cardText}>
        <p>
          {hideText(text, 200)}{" "}
          <NavLink to="/aktiviteter">
            <span className={styles.learnMore}>Läs Mer...</span>
          </NavLink>
        </p>
      </div>
    </div>
  );
};

const MAX_VISIBILITY = 3;

const Activity = () => {
  const [active, setActive] = useState(2);
  const count = cards.length;
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 10 && active < count - 1) {
      setActive((prevActive) => prevActive + 1);
    }

    if (touchStartX - touchEndX < -10 && active > 0) {
      setActive((prevActive) => prevActive - 1);
    }
  };

  return (
    <div
      className={styles.activityContainer}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.carousel}>
        {active > 0 && (
          <span
            className={`${styles.navLeft} ${styles.nav}`}
            onClick={() => setActive((i) => i - 1)}
          >
            <FaChevronLeft strokeWidth={1} className={styles.leftIcon} />
          </span>
        )}
        {cards.map((card, i) => (
          <div
            key={i}
            className={styles.cardContainer}
            style={{
              "--active": i === active ? 1 : 0,
              "--offset": (active - i) / 3,
              "--direction": Math.sign(active - i),
              "--abs-offset": Math.abs(active - i) / 3,
              pointerEvents: active === i ? "auto" : "none",
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
              display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
            }}
          >
            <NavLink to="/aktiviteter" className={styles.cardLink}>
              <Card image={card.image} title={card.title} text={card.text} />
            </NavLink>
          </div>
        ))}
        {active < count - 1 && (
          <span
            className={`${styles.navRight} ${styles.nav}`}
            onClick={() => setActive((i) => i + 1)}
          >
            <FaChevronRight strokeWidth={1} className={styles.rightIcon} />
          </span>
        )}
      </div>
    </div>
  );
};

export default Activity;
