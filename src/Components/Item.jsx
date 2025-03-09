import "./ComponentsStyle/Item.css";

const Item = ({item}) => {

    console.log(item.Name + "item");

    return (
        <div className="Item">
            <div className="itemImgWrapper"><img className="itemImg" src={item.Photo ? item.Photo : "https://images.pexels.com/photos/30978806/pexels-photo-30978806/free-photo-of-elegant-coffee-cup-with-floral-saucer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="" /></div>
            <h1>{item.Name}</h1>
            <p className="price">{item.Price}</p>
        </div>
    );
}
 
export default Item;
