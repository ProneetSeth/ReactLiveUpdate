import AddToCartIcon from "../assets/cart1.svg"
import { useState } from "react"

const ListItem = ({ data }) => {

    const [message, setMessage] = useState("Not added to the cart yet")

    // let message = "Not added to the cart yet"
    const handleClick = () => {
        // message = "Added to the cart!"
        setMessage("Added to the Cart!")
        console.log("Clicked, ", message)
    }

    return (
        <div className={"item-card"}>
            <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.thumbnail}/>
            <div className={"item-card__information"}>
                <div className={"pricing"}>
                    <span>₹{data.discountedPrice}</span>
                    <small>
                        <strike>₹{data.price}</strike>
                    </small>
                </div>
                <div className={"title"}>
                    <h3>{data.title}</h3>
                </div>
            </div>
            <small className={"cart-message"}>{message}</small>
            <button className={"cart-add"} onClick={handleClick}>
                <span>Add to Cart</span>
                <img src={AddToCartIcon} alt="Cart Icon" width="18px" height="18px"/>
            </button>
        </div>
    )
}

export default ListItem