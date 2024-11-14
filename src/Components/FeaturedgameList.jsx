import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect, useMemo } from 'react';
import '../assets/css/fontawesome.css'; 
import '../assets/css/templatemo-cyborg-gaming.css'; 
import '../assets/css/owl.css'; 
import '../assets/css/animate.css'; 
import 'swiper/swiper-bundle.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import $ from 'jquery';
import FeaturedGame from './FeaturedGame';
import { LanguageContext } from "../context/LanguageContext";
import {  UseGames } from "../context/GameContext";
import { Link } from 'react-router-dom';
import { slugify } from '../assets/utility/utils';


const FeaturedGameList = ({ searchedItem, setSearchedItem }) => {
  console.log(searchedItem);
  const { texts, switchLanguage, language } = useContext(LanguageContext);
  const{games,setgames}=UseGames()
  const filteredGames = useMemo(() => {
    if (searchedItem === '') {
      return games;
    }
    return games.filter(game =>
      game.title.toLowerCase().includes(searchedItem.toLowerCase())
    );
  }, [searchedItem, games]);

  useEffect(() => {
    const $carousel = $('.owl-carousel');

    if ($.fn.owlCarousel) {
      $carousel.owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
          0: { items: 1 },
          600: { items: 2 },
          1000: { items: 3 },
        },
      });
    }

    return () => {
      $carousel.trigger('destroy.owl.carousel');
    };
  }, [filteredGames]);

  return (
    <div className="featured-games header-text">
      <div className="heading-section">
        <h4 style={{ float: "right" }}><em>{texts.best}</em> {texts.games}</h4>
      </div>
      <div className="owl-carousel">
        {filteredGames.map((game, index) => (
          <div className="item" key={index}> {/* Add this wrapper div */}
          <Link to={`/games/${slugify(game.title)}`}>
       
            <FeaturedGame game={game} /></Link>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default FeaturedGameList;
