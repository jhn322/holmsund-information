import React from "react";
import styles from "../styles/Highlight.module.css";

// Components
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import ContentCircle from "../components/ContentCircle";
import Highlight from "../components/Highlight";
import Spotlight from "../components/Spotlight";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import Separator from "../components/Separator";

// Images
import highlightImage1 from "../assets/highlight1.jpg";
import highlightImage2 from "../assets/highlight2.jpg";
import highlightImage3 from "../assets/highlight3.jpg";
import highlightImage4 from "../assets/highlight4.jpg";
import highlightImage5 from "../assets/spotlight5.jpg";
import highlightImage6 from "../assets/spotlight6.jpg";
import highlightImage7 from "../assets/spotlight7.jpg";
import highlightImage8 from "../assets/spotlight8.jpg";

const HomePage = () => {
  const cards = [
    {
      image: highlightImage1,
      title: "Aqua Arena",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam placeat possimus atque, modi minima saepe, ex odio aliquam cumque quis officia cupiditate vitae at dicta amet. Tenetur enim nihil dolores.",
    },
    {
      image: highlightImage2,
      title: "Vattentornet",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam placeat possimus atque, modi minima saepe, ex odio aliquam cumque quis officia cupiditate vitae at dicta amet. Tenetur enim nihil dolores.",
    },
    {
      image: highlightImage3,
      title: "Golfbana",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam placeat possimus atque, modi minima saepe, ex odio aliquam cumque quis officia cupiditate vitae at dicta amet. Tenetur enim nihil dolores.",
    },
    {
      image: highlightImage4,
      title: "Storsjöhallen",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam placeat possimus atque, modi minima saepe, ex odio aliquam cumque quis officia cupiditate vitae at dicta amet. Tenetur enim nihil dolores.",
    },
    {
      image: highlightImage5,
      title: "Ett till ställe",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam placeat possimus atque, modi minima saepe, ex odio aliquam cumque quis officia cupiditate vitae at dicta amet. Tenetur enim nihil dolores.",
    },
    {
      image: highlightImage6,
      title: "Nästa ställe",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam placeat possimus atque, modi minima saepe, ex odio aliquam cumque quis officia cupiditate vitae at dicta amet. Tenetur enim nihil dolores.",
    },
    {
      image: highlightImage7,
      title: "Långt borta",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam placeat possimus atque, modi minima saepe, ex odio aliquam cumque quis officia cupiditate vitae at dicta amet. Tenetur enim nihil dolores.",
    },
    {
      image: highlightImage8,
      title: "Sista stället",
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
          <p>{hideText(text, 200)}</p>
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
      <Highlight>
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            text={card.text}
          />
        ))}
      </Highlight>
      <Separator />
      <Spotlight />
      <Gallery />
      <Footer />
    </main>
  );
};

export default HomePage;
