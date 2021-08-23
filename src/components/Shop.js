import React, {  useEffect, useState } from "react";
import  {db} from "../Firebase"

 const Shop = () => {

  const [products, setProducts ]= useState([]) 

  const fetchProducts = async ()=>{
    db.collection("Products").onSnapshot((snapshot) => {
      const prodData = []
      snapshot.forEach((doc) =>{
        prodData.push({...doc.data(), id:doc.id})
      })
          setProducts(prodData)
          console.log(products);

    })
    }

  useEffect(() =>{
    fetchProducts()
  }, [])
  
  return (
    <div className="prices">
    <div className="container">
    <div className="rows">
      {products && products.map(product =>(
          <div>
            <h1>
              {product.ProductName}
           </h1>
         </div>
        )
      )
      }


      </div>

      </div>

    </div>

  );
}

export default  Shop;
