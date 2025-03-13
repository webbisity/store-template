import { useEffect, useState } from "react";
import Categories from "../Pages/Categories";
import Products from "../Pages/Products";
import "./SectionStyle/Main.css"

const Main = () => {

    const [category, setCategory] = useState();
    const [itemID, setItemID] = useState();
  
    category && console.log(category + "category");

    // Update state from URL
    const updateStateFromURL = () => {
        const urlParams = new URLSearchParams(window.location.search);
        setCategory(urlParams.get("category") || "");
        setItemID(urlParams.get("itemID") || "");
      };

    useEffect(() => {
        updateStateFromURL();

        window.addEventListener("popstate", updateStateFromURL);

        return () => {
            window.removeEventListener("popstate", updateStateFromURL);
        };
    }, []);
    
    // Update URL
    useEffect(() => {
        const url = new URL(window.location);
        category ? url.searchParams.set("category", category) : url.searchParams.delete("category");
        itemID ? url.searchParams.set("itemID", itemID) : url.searchParams.delete("itemID");
        window.history.replaceState({}, "", url);
    }, [itemID, category]);
    
    return (
        <div className="Main">              
            {!category ? <Categories setCategory={setCategory}/> : <Products category={category} itemID={itemID} setItemID={setItemID}/> }
        </div>
    );
}

export default Main;