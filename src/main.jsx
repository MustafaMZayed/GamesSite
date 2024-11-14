import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import $ from 'jquery'; // استيراد jQuery
import './assets/css/fontawesome.css'; // تأكد أن المسار صحيح
import './assets/css/templatemo-cyborg-gaming.css'; // تأكد أن المسار صحيح
import './assets/css/owl.css'; // تأكد أن المسار صحيح
import './assets/css/animate.css'; // تأكد أن المسار صحيح
import 'swiper/swiper-bundle.css';


// جعل jQuery متاحة عالميًا
window.$ = $;
window.jQuery = $;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
