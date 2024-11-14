import { useParams } from "react-router-dom";
import { UseGames } from "../context/GameContext";
import { useEffect, useState } from "react";
import { slugify } from "../assets/utility/utils";


const GameGallery = () => {
  const { gameTitle } = useParams(); // Get the game title from the URL
  const { games } = UseGames(); // Assume games is an array of game objects
  const [selectedGame, setSelectedGame] = useState(null); // Separate state for the selected game
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const handleNextImage = () => {
    if (selectedGame && selectedGame.gallery) {
      setSelectedImageIndex((nextIndex) =>
       nextIndex === selectedGame.gallery.length - 1 ? 0 : nextIndex + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedGame && selectedGame.gallery) {
      setSelectedImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedGame.gallery.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    const game = games.find(game => slugify(game.title) === gameTitle);
    setSelectedGame(game || null);
    
    // Log the found game
    console.log("Found Game: ", game);
  }, [gameTitle, games]);

  // Log selectedGame for debugging
  console.log("Selected Game: ", selectedGame);

  if (!selectedGame) return <div>Loading...</div>; // Render loading until the game is found

  return (
    <div>
      <div className="gallery">
        {selectedGame.gallery ? ( // Check if gallery is defined
          selectedGame.gallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="gallery-image"
              onClick={() => handleImageClick(index)} // Pass the index instead of the image
            />
          ))
        ) : (
          <div>No images available</div> // Fallback message if no images
        )}
      </div>

      {selectedImageIndex !== null && (
        <div className="modal">
          <button className="img-close-button" onClick={closeModal}>
            &times; {/* Close button */}
          </button>
          <button className="nav-button left" onClick={handlePrevImage}>
            &#10094; {/* Left arrow */}
          </button>
          <img
            src={selectedGame.gallery[selectedImageIndex]}
            alt="Enlarged"
            className="modal-image"
          />
          <button className="nav-button right" onClick={handleNextImage}>
            &#10095; {/* Right arrow */}
          </button>
        </div>
      )}
    </div>
  );
};

export default GameGallery;
