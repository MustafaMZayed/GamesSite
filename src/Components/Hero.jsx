import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function Hero() {
  const { texts, switchLanguage, language } = useContext(LanguageContext);
    return (
        
    <div className="row">
      <div className="col-lg-12">
        <div className="page-content">
          <div className="flex-banner">
              <div className="main-banner">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="header-text">
                      <h6>Welcome To Cyborg</h6>
                      <h4><em>Browse</em> Our Popular Games Here</h4>
                      <div className="main-button">
                        <a href="browse.html">Browse Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
                  </div>
                </div>
              
            );
          };
          
          


export default Hero
