import { useContext, useState } from "react";
import { UseBalance } from "../context/balanceContext";
import { LanguageContext } from "../context/LanguageContext";
import ArabicFlag from "./ArabicFlag";
import EnglishFlag from "./EnglishFlag";
import { Link, NavLink } from 'react-router-dom';

export default function Navbar({ setSearchedItem, searchedItem }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { balance } = UseBalance();
  const { texts, switchLanguage, language } = useContext(LanguageContext);

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav d-flex justify-content-between align-items-center">
              {/* Logo */}
              <a href="index.html" className="logo">
                <img src="/images/logo.png" alt="Logo" className="responsive-logo" />
              </a>
              
      <button className="langbtn" onClick={() => switchLanguage(language === "en" ? "ar" : "en")}>
      {language === "en" ? <ArabicFlag /> : <EnglishFlag />}

      </button>
            
              {/* Menu */}
              <ul className={`nav d-flex align-items-center ${isMenuOpen ? "show" : ""}`}>
      <li style={{ paddingRight: "2rem" }}>
        <a style={{ backgroundColor: "#27292a" }}>
          <i className="fa-solid fa-dollar-sign"></i> {balance} : {texts.balance} <i className="fa-solid fa-plus"></i>
        </a>
      </li>
      <li>
        <NavLink to="/" exact className={({ isActive }) => (isActive ? 'active' : '')}>
          {texts.home}
        </NavLink>
      </li>
      <li>
        <NavLink to="/games"  className={({ isActive }) => (isActive ? 'active' : '')}>
          {texts.games}
        </NavLink>
      </li>
     
      <li>
      <NavLink to="/login"  className={({ isActive }) => (isActive ? 'active' : '')}>
       {texts.login}
        </NavLink>
      </li>
      
      
      <li>
      <NavLink to="/signup"  className={({ isActive }) => (isActive ? 'active' : '')}>
       {texts.signUp}
        </NavLink>
      </li>
      <li>
     < NavLink to="/account">
        
          {texts.account} <img src="images/profile-header.jpg" alt="Profile" />
        
        </NavLink>
      </li>
    </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
