import "./ComponentsStyle/Item.css";

const Item = () => {
    return (
        <div className="Item">
            <div className="itemImgWrapper"><img className="itemImg" src="https://images.pexels.com/photos/30978806/pexels-photo-30978806/free-photo-of-elegant-coffee-cup-with-floral-saucer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
            <h1>Iphone</h1>
            <p className="price">1,000$</p>
        </div>
    );
}
 
export default Item;
