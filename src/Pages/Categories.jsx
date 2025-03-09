import { useContext } from "react";
import { DBContext } from "../DB/DBContext";

const Categories = ({setCategory}) => {

    const { categories } = useContext(DBContext);
    categories && console.log(categories + "asdasd");

    return (
        <div className="Categories">
            {categories && categories.map((category, index) => {
                return (
                    <div className="category">
                        <div className="categoryItem" onClick={() => {setCategory(category)}}>{category}</div>
                    </div>
                )
            })}
        </div>
    );
}
 
export default Categories;