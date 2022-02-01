import ListItem from "./ListItem"
import { useState } from "react"

// const item = {
//     id: 0,
//     title: "Title of this Item 1",
//     price: 450,
//     discountedPrice: 340,
//     thumbnail: "donut.png"
// }

const Product = () => {

    const [item,setItem] = useState({
            id: 0,
            title: "Title of this Item 1",
            price: 450,
            discountedPrice: 340,
            thumbnail: "donut.png"
    })

    const [title,setTitle] = useState("")
    const [price,setPrice] = useState("0")
    const [discountedPrice,setDiscountedPrice] = useState("0")
    const [thumbnail,setThumbnail] = useState("donut.png")

    const handleTitle = (event) =>{
       //console.log(event.target.value);
        setTitle(event.target.value)
        setItem({
            ...item,
            title:event.target.value
        })
    }
    const handlePrice = e =>{
        setPrice(e.target.value)
        setItem({
            ...item,
            price:e.target.value
        })
    }
    const handleDiscountedPrice = e =>{
        setDiscountedPrice(e.target.value)
        setItem({
            ...item,
            discountedPrice:e.target.value
        })
    }
    const handleThumbnail = e =>{
        setThumbnail(e.target.value)
        setItem({
            ...item,
            thumbnail:e.target.value
        })
    }
    const submitForm = e =>{
        e.preventDefault();
        console.log({
            title,
            price,
            discountedPrice,
            thumbnail
        })
        if(discountedPrice > price){
            alert("Discounted Price can not be greater than price!")
            return;
        }
        setItem({
            title,
            price,
            discountedPrice,
            thumbnail
        })
    }

    return (
        <div className={"product-wrapper"}>
            <div className={"form"}>
                <form onSubmit={submitForm}>

                    <h2>Item Card Details</h2>

                    <div className={"input-field"}>
                        <label htmlFor="title">Title</label>
                        <input 
                        type="text" 
                        placeholder="Enter Title"
                        value={title}
                        onChange={handleTitle}
                        required />
                    </div>
                    
                    <div className={"input-field"}>
                        <label htmlFor="price">Price</label>
                        <input 
                        type="number"
                        placeholder="0"
                        value={price}
                        onChange={handlePrice} 
                        required/>
                    </div>

                    <div className={"input-field"}>
                        <label htmlFor="discountedPrice">DiscountedPrice</label>
                        <input 
                        type="number"
                        placeholder="0"
                        value={discountedPrice}
                        onChange={handleDiscountedPrice}
                        required />
                    </div>
                   

                    <div className={"input-field"}>
                        <label htmlFor="thumbnail">Thumbnail</label>
                        <input 
                        type="text" 
                        placeholder="example.png"
                        value={thumbnail}
                        onChange={handleThumbnail}
                        required />
                    </div>

                    <div className={"submit-wrap"}>
                        <button>Update</button>
                    </div>

                </form>
            </div>
            <div>
                <div>
                    <ListItem data={item} />
                </div>
            </div>
        </div>
    )
}

export default Product