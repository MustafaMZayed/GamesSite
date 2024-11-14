import { useParams } from "react-router-dom";
import { UseGames } from "../context/GameContext";
import { useEffect, useState } from "react";
import { slugify } from "../assets/utility/utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const GameDescription = () => {
    
  const { gameTitle } = useParams(); // Get the game title from the URL
  const { games } = UseGames(); // Assume games is an array of game objects
  const [selectedGame, setSelectedGame] = useState(null); // Separate state for the selected game


  useEffect(() => {
    // Find the game that matches the slugified title in the URL
    const game = games.find(game => slugify(game.title) === gameTitle);
    setSelectedGame(game || null); // Set to null if no game is found
  }, [gameTitle, games]);

  if (!selectedGame) return <div>Loading...</div>; // Render loading until game is found
  

  return (<>
  <div className="game-details">
      <div className="gameDescription">
        <h1 className="Description" >Description</h1>
        <p className="Description">{selectedGame.description}</p>
      </div>

     
    </div>
  </>);
};

export default GameDescription;