
import { children, createContext, useContext, useState } from "react";

const MyContext=createContext();
export default function GameProvider({children}){
    const [games, setGames] = useState([
        {
          image: "/images/featured-01.jpg",
          title: "CS-GO",
          downloads: "249K Downloads",
          tags:['action','romance','horror'],
          rating: "4.8",
          price:"5",
          version:"1.0",
          description:'loremipsum fbjipknbgsiohbaopd diphjbi dob gdhb jodgbhgdo[ hbdg[o hb[go hdg[h ',
          gallery:["/images/featured-02.jpg","/images/featured-01.jpg","/images/featured-03.jpg"]

        },
        {
          image: "/images/featured-02.jpg",
          title: " بقث 516178461الحياه" ,
          downloads: "249K Downloads",
          tags:'action',
          rating: "4.8",
          price:"5",
          version:"1.0",
          description:'loremipsum fbjipknbgsiohbaopd diphjbi dob gdhb jodgbhgdo[ hbdg[o hb[go hdg[h '
          ,gallery:["/images/featured-02.jpg","/images/featured-01.jpg","/images/featured-03.jpg"]
        },
        {
          image: "/images/featured-03.jpg",
          title: "جنه منتصف الليل",
          downloads: "249K Downloads",
          tags:'action',
          rating: "4.8",
          price:"5",
          version:"1.0",
          description:'loremipsum fbjipknbgsiohbaopd diphjbi dob gdhb jodgbhgdo[ hbdg[o hb[go hdg[h '
          ,gallery:["/images/featured-02.jpg","/images/featured-01.jpg","/images/featured-03.jpg"]
        }, {
          image: "/images/featured-02.jpg",
          title: "Gamezetrr",
          downloads: "249K Downloads",
          tags:'action',
          rating: "4.8",
          price:"5",
          version:"1.0",
          description:'loremipsum fbjipknbgsiohbaopd diphjbi dob gdhb jodgbhgdo[ hbdg[o hb[go hdg[h '
          ,gallery:["/images/featured-02.jpg","/images/featured-01.jpg","/images/featured-03.jpg"]
        }, {
          image: "/images/featured-02.jpg",
          title: "Gamezeaar",
          downloads: "249K Downloads",
          tags:'action',
          rating: "4.8",
          price:"5",
          version:"1.0",
          description:'loremipsum fbjipknbgsiohbaopd diphjbi dob gdhb jodgbhgdo[ hbdg[o hb[go hdg[h '
          ,gallery:["/images/featured-02.jpg","/images/featured-01.jpg","/images/featured-03.jpg"]
        }, {
          image: "/images/featured-02.jpg",
          title: "Gamezvder",
          downloads: "249K Downloads",
          tags:'action',
          rating: "4.8",
          price:"5",
          version:"1.0",
          description:'loremipsum fbjipknbgsiohbaopd diphjbi dob gdhb jodgbhgdo[ hbdg[o hb[go hdg[h '
          ,gallery:["/images/featured-02.jpg","/images/featured-01.jpg","/images/featured-03.jpg"]
        },
        // Add more games...
      ]);



return(
    <MyContext.Provider value={{games,setGames}}>
        {children}
    </MyContext.Provider>
)
}

export function UseGames(){
    const context= useContext(MyContext)
    if (context===undefined) throw new Error('context is out of bounds')
    return context
}