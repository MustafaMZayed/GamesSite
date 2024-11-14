import { useParams } from "react-router-dom";
import { UseGames } from "../context/GameContext";
import { useEffect, useState } from "react";
import { slugify } from "../assets/utility/utils";
import { UseBalance } from "../context/balanceContext";
function BuyButton() {
    const { gameTitle } = useParams(); // Get the game title from the URL
    const { games } = UseGames(); // Assume games is an array of game objects
    const [selectedGame, setSelectedGame] = useState(null); // Separate state for the selected game
    const{balance,setBalance}=UseBalance();
    const[buytext,setBuytext]=useState(<> Buy <i className="fa-solid fa-cart-shopping"></i> </>)
    const[downloadstate,setDownloadstate]=useState('hidden-download-btn')
  
    useEffect(() => {
      // Find the game that matches the slugified title in the URL
      const game = games.find(game => slugify(game.title) === gameTitle);
      setSelectedGame(game || null); // Set to null if no game is found
    }, [gameTitle, games]);
  
    if (!selectedGame) return <div>Loading...</div>; // Render loading until game is found

    function handlePay(){
        if (selectedGame.price>=balance) {setDownloadstate('download-btn')
            if (balance===0) setBalance(0)
                else{setBalance(balance-selectedGame.price)}
            
            setBuytext('Owned')

        }
            else console.log('not enough balance')
    }
    return (
        <div className="btn-space">
        <button className="buy-btn" onClick={handlePay}>{buytext}</button>
        <button className={`${downloadstate}`} >Download <i className="fa-solid fa-download"></i></button></div>
    )
}

export default BuyButton
