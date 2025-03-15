import { useEffect, useState } from "react";
import Categories from "../Pages/Categories";
import Products from "../Pages/Products";
import "./SectionStyle/Main.css"

const Main = () => {
    const [category, setCategory] = useState("");
    const [itemID, setItemID] = useState("");

    // Function to update state from URL
    const updateStateFromURL = () => {
        const urlParams = new URLSearchParams(window.location.search);
        setCategory(urlParams.get("category") || "");
        setItemID(urlParams.get("itemID") || "");
    };

    useEffect(() => {
        updateStateFromURL(); // Set initial state from URL

        // Observer to detect changes in the URL bar
        const observer = new MutationObserver(() => {
            updateStateFromURL();
        });

        observer.observe(document.documentElement, { childList: true, subtree: true });

        // Also listen for back/forward button presses
        window.addEventListener("popstate", updateStateFromURL);

        return () => {
            observer.disconnect();
            window.removeEventListener("popstate", updateStateFromURL);
        };
    }, []);

    // Update URL when state changes (without adding to history stack)
    useEffect(() => {
        const url = new URL(window.location);
        category ? url.searchParams.set("category", category) : url.searchParams.delete("category");
        itemID ? url.searchParams.set("itemID", itemID) : url.searchParams.delete("itemID");
        window.history.replaceState({}, "", url);
    }, [category, itemID]);

    return (
        <div className="Main">              
            {!category ? <Categories setCategory={setCategory} /> : <Products category={category} itemID={itemID} setItemID={setItemID} />}
        </div>
    );
};

export default Main;