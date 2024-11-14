import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import GameHeader from "../Components/GameHeader"
import GameDescription from "../Components/GameDescription"
import GameGallery from "../Components/GameGallery"
import Sidebar from "../Components/Sidebar"

function GameContent() {
    return (
        <>
        <Navbar/>
        <Sidebar/>
     
        <div className="page-content">
        
        <GameHeader/>
        <GameDescription/>
        <GameGallery/>
        
        </div> 
        <Footer/>
            
        </>
    )
}

export default GameContent
