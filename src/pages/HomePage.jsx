import React from "react";
import styles from "../styles/Activity.module.css";
import { NavLink } from "react-router-dom";

// Components
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import ContentCircle from "../components/ContentCircle";
import Activity from "../components/Activity";
import Discover from "../components/Discover";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import Separator from "../components/Separator";
import ScrollUp from "../components/ScrollUp";

// Images
import activityImage1 from "../assets/activity1.jpg";
import activityImage2 from "../assets/activity2.jpg";
import activityImage3 from "../assets/activity3.jpg";
import activityImage4 from "../assets/activity4.jpg";
import activityImage5 from "../assets/activity5.jpg";
import activityImage6 from "../assets/activity6.jpg";
import activityImage7 from "../assets/activity7.jpg";
import activityImage8 from "../assets/activity8.jpg";

const HomePage = () => {
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
          <h2>{title}</h2>
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

  return (
    <main>
      <Navigation />
      <Header />
      <ContentCircle />
      <Separator />
      <Activity>
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            text={card.text}
          />
        ))}
      </Activity>
      <Discover />
      <Gallery />
      <Footer />
      <ScrollUp />
    </main>
  );
};

export default HomePage;
