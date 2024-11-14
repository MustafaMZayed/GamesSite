import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/fontawesome.css'; // تأكد أن المسار صحيح
import '../assets/css/templatemo-cyborg-gaming.css'; // تأكد أن المسار صحيح
import '../assets/css/owl.css'; // تأكد أن المسار صحيح
import '../assets/css/animate.css'; // تأكد أن المسار صحيح
import 'swiper/swiper-bundle.css';
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";
import MostPopular from "../Components/MostPopular";



function Home() {
    return (
     <>
    
        
      <Navbar/>
     
      <Hero/>
      <div className="page-content">
    <MostPopular/>
     </div>
      <Sidebar/>
     
      <Footer/>
     
      </>
    )
}

export default Home
