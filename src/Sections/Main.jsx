import { useEffect, useState } from "react";
import Categories from "../Pages/Categories";
import Products from "../Pages/Products";
import "./SectionStyle/Main.css"

const Main = () => {

    const [category, setCategory] = useState();
    category && console.log(category + "category");
    /* useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setCategory(params.get('category'));
    }, []); */
    
    return (
        <div className="Main">              
            {!category ? <Categories setCategory={setCategory}/> : <Products category={category}/> }
        </div>
    );
}

export default Main;