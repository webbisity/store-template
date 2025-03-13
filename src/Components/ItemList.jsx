import "./ComponentsStyle/ItemList.css";
import Item from "./Item";

const ItemList = ({items, setItemID}) => {

    return (
        <div className="ItemList">
            {items && items.map((item) => {
                return (
                    console.log(item.Name + "item"),
                    <Item item={item} onClick={() => {setItemID(item.ID)}}/>
                )
            })}
        </div>
);
}
 
export default ItemList;