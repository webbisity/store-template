import { useContext, useEffect, useState } from "react";
import ItemList from "../Components/ItemList";
import { DBContext } from "../DB/DBContext";

const Products = ({category, itemID, setItemID}) => {

    
    const {products} = useContext(DBContext);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (products) {
            const filtered = products.filter(product => ((product.Category.toLowerCase()) === (category.toLowerCase())));
            setFilteredProducts(filtered);
        }
    }, [products, category]);

    return (
        <div className="Products">
            {filteredProducts.length > 0 ? <ItemList items={filteredProducts} setItemID={setItemID}/> : "No matching products found"}
        </div>
    );
}
 
export default Products;