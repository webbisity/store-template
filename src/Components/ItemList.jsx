import "./ComponentsStyle/ItemList.css";
import Item from "./Item";

const ItemList = ({items}) => {

    return (
        <div className="ItemList">
            {items && items.map((item) => {
                return (
                    console.log(item.Name + "item"),
                    <Item item={item}/>
                )
            })}
        </div>
);
}
 
export default ItemList;