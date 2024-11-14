import Footer from "../Components/Footer"
import GamingLibrary from "../Components/GamingLibrary"
import Navbar from "../Components/Navbar"
import ProfileBanner from "../Components/ProfileBanner"

function Account() {
    return (
        <>
               <Navbar/>
               <div className="row">
      <div className="col-lg-12">
        <div className="page-content">
           <ProfileBanner/>
           <GamingLibrary/>
           </div></div></div>
           <Footer/>  
        </>
    )
}

export default Account
