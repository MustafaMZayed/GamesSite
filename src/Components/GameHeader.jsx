import { useParams } from "react-router-dom";
import { UseGames } from "../context/GameContext";
import { useEffect, useState } from "react";
import { slugify } from "../assets/utility/utils";

import { NavLink } from 'react-router-dom';
import BuyButton from "./BuyButton";

const GameHeader = () => {
  const { gameTitle } = useParams(); // Get the game title from the URL
  const { games } = UseGames(); // Assume games is an array of game objects
  const [selectedGame, setSelectedGame] = useState(null); // Separate state for the selected game

  useEffect(() => {
    // Find the game that matches the slugified title in the URL
    const game = games.find(game => slugify(game.title) === gameTitle);
    setSelectedGame(game || null); // Set to null if no game is found
  }, [gameTitle, games]);

  if (!selectedGame) return <div>Loading...</div>; // Render loading until game is found

  return (
   
    <div className="game-header">
     <span>
     <NavLink to='/games'> <button  className="game-back-btn" > <i className="fa-solid fa-circle-left"></i> Back  </button></NavLink>
      <img src={selectedGame.image} alt={`${selectedGame.title} poster`} className="game-poster" />
      <div className="game-info">
        <h1 className="game-name">{selectedGame.title}</h1>
        <div className="game-tags">
          {/* Safely render tags */}
          {Array.isArray(selectedGame.tags) && selectedGame.tags.map((tag, index) => (
            <span key={index} className="game-tag">{tag}</span>
          ))}
        </div>
        <p className="game-price">Price: ${selectedGame.price}</p>
        <p className="game-version">Version: {selectedGame.version}</p>
      </div></span>
     
        <BuyButton/>
      
     
   
  
    </div>
  );
};

export default GameHeader;
