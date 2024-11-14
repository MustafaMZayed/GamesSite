import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import '../assets/css/Auth.css';
export default function SearchBar({ searchedItem, setSearchedItem }) {
  const { texts } = useContext(LanguageContext);
  return (
    <div className="search-container">
       
      <input
        type="text"
        placeholder= {texts.search}
        value={searchedItem}
        onChange={(e) => setSearchedItem(e.target.value)}
        className="search-bar"
      />
    </div>
  );
}
