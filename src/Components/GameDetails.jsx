import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const GameDetails = () => {
  const { id } = useParams();  // Access game ID from URL
  const [game, setGame] = useState(null);

  useEffect(() => {
    // Fetch game data by ID (mock or use your API)
    fetch(`/api/games/${id}`)
      .then((response) => response.json())
      .then((data) => setGame(data));
  }, [id]);

  if (!game) return <div>Loading...</div>;

  return (
    <div>
      <h2>{game.name}</h2>
      <img src={game.image} alt={game.name} />
      <p>{game.description}</p>
      <p>Genre: {game.genre}</p>
      <p>Release Date: {game.releaseDate}</p>
    </div>
  );
};

export default GameDetails;
