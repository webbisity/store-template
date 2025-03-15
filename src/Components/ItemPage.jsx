import "../Components/ComponentsStyle/ItemPage.css";

const ItemPage = ({item}) => {

    return (
        <div className="ItemPage">
            <img src={item.Photo} alt={item.name} className="ItemImage" />
            <h1>{item.Name}</h1>
            <p>Price: ${item.Price}</p>
            <div className="ItemTags">
                {item.Tags.split(',').map((tag, index) => (
                    <span key={index} className="ItemTag">{tag}</span>
                ))}
            </div>
        </div>
    );
}
 
export default ItemPage;