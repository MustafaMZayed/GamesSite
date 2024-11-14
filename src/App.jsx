
import Games from './Pages/Games';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import './assets/css/fontawesome.css'; // تأكد أن المسار صحيح
import './assets/css/templatemo-cyborg-gaming.css'; // تأكد أن المسار صحيح
import './assets/css/owl.css'; // تأكد أن المسار صحيح
import './assets/css/animate.css'; // تأكد أن المسار صحيح
import 'swiper/swiper-bundle.css';
import {  LanguageProvider } from './context/LanguageContext';
import BalanceProvider from './context/BalanceContext';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Account from './Pages/Account';
import GameProvider from './context/GameContext';
import GameContent from './Pages/GameContent';

const App = () => {
  return (
    <BrowserRouter>
      <BalanceProvider>
        <LanguageProvider>
          <GameProvider>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/games' element={<Games />} />
              <Route path="/games/:gameTitle" element={<GameContent />} /> {/* Only this dynamic route */}
              <Route path='login' element={<Login />} />
              <Route path='signup' element={<SignUp />} />
              <Route path='account' element={<Account />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </GameProvider>
        </LanguageProvider>
      </BalanceProvider>
    </BrowserRouter>
  );
};




export default App;
