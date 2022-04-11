import React from "react"
import data from '../data.json'
import "./Grocerydetails.css"



const GroceryDetails = ()=>{
console.log("data",data)

    return(
        <>
        <h1>Groceries</h1>
        <div className="container">
            {data.map((item)=>{
                return <div  className="main"> 
                    <img src ={item.imgURL} alt="title" />
                    <h4>{item.title}</h4>
                    <div className="bottom">
                        <h4>{item.mrp}</h4>
                        <h4>{item.sellingPrice}</h4>
                    </div>

                </div>
            })}
            {/* <CartButton data = {data}/> */}

            {/* map through the data and display the cards */}
        </div>
        </>
    )
}
export default GroceryDetails


// {
//     "id": 1,
//     "title": "Nivea Whitening Smooth Skin Roll On Deodorant for Women 50 ml",
//     "imgURL":
//       "https://www.jiomart.com/images/product/150x150/490830561/nivea-whitening-smooth-skin-roll-on-deodorant-for-women-50-ml-product-images-o490830561-p490830561-0-202203151142.jpg",
//     "mrp": "₹ 199.00",
//     "sellingPrice": "₹ 132.00",
//     "discount": "33%"
//   },