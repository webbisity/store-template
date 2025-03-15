import { useContext, useEffect, useState } from "react";
import Item from "../Components/Item";
import { DBContext } from "../DB/DBContext";
import ItemPage from "../Components/ItemPage";
import "../Pages/PagesStyle/Products.css";

const Products = ({category, itemID, setItemID}) => {
    itemID && console.log(itemID + "itemID");
    
    const {products} = useContext(DBContext);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [item, setItem] = useState();

    useEffect(() => {
        if (products) {
            const filtered = products.filter(product => ((product.Category.toLowerCase()) === (category.toLowerCase())));
            setFilteredProducts(filtered);
        }
    }, [products, category]);

    useEffect(() => {
        if (itemID && products) {
            const item1 = products.find(product => (product.ID) === (itemID));
            setItem(item1);
        }
    },[products, itemID])

    return (
        <div className="Products">
            {itemID ? 
                <div>
                    {products && item && <ItemPage item={item}/> }
                </div>
                
                : 
                
                <div className="ItemList">
                {filteredProducts && filteredProducts.map((item) => {
                    return (
                        <Item item={item} setItemID={setItemID}/>
                    )
                })}
                </div>
            }
            {/* {filteredProducts.length > 0 ? <ItemPage items={filteredProducts} setItemID={setItemID}/> : "No matching products found"} */}
        </div>
    );
}
 
export default Products;