import { useState } from "react";
import "../assets/css/sidebar.css"; // Import CSS for styles
import { UseBalance } from "../context/balanceContext";


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // State to control sidebar visibility
 const {balance}=UseBalance()
  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar visibility
  };

  return (
    <div>
      {/* Button to open sidebar */}
      <button className="menu-button" onClick={toggleSidebar}>
        ☰ 
      </button>
    <div className="balance-container">
      <span className="balance">
      <i className="fa-solid fa-dollar-sign"></i> {balance} : الرصيد <i className="fa-solid fa-plus"></i>
      </span> </div>

      {/* Sidebar menu */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      
        <ul>
          <li><a href="/">الرئيسيه</a></li>
          <li><a href="/about">الالعاب</a></li>
          <li><a href="/services">تسجيل الدخول</a></li>
          <li><a href="/contact">انشاء حساب</a></li>
          <li><a href="/contact"> الرصيد</a></li>
          

        </ul>
      </aside>

      {/* Overlay (optional) */}
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
}
