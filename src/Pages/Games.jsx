import Navbar from '../Components/Navbar';

import FeaturedGameList from '../Components/FeaturedgameList';
import { useState } from 'react';
import { UseBalance } from '../context/BalanceContext';
import Sidebar from '../Components/Sidebar';
import Search from "../Components/SearchBar";
import Footer from '../Components/Footer';
function Games() {
    
    const [searchedItem, setSearchedItem] = useState('')
    const {balance}=UseBalance()
    console.log(balance)
    return (
        <>
              <Navbar setSearchedItem={setSearchedItem} searchedItem={searchedItem} balance={balance} />
    <div className="row">
      <div className="col-lg-12">
        <div className="page-content">
             <Search searchedItem={searchedItem} setSearchedItem={setSearchedItem}/>
            <FeaturedGameList searchedItem={searchedItem} setSearchedItem={setSearchedItem} />
            <Sidebar/>
           
            </div>
            </div>
            </div>
            <Footer/>

        </>
    )
}

export default Games
