
import { children, createContext, useContext, useState } from "react";

const MyContext=createContext();
export default function BalanceProvider({children}){
const [balance,setBalance]=useState(5);



return(
    <MyContext.Provider value={{balance,setBalance}}>
        {children}
    </MyContext.Provider>
)
}

export function UseBalance(){
    const context= useContext(MyContext)
    if (context===undefined) throw new Error('context is out of bounds')
    return context
}