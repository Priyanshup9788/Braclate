import React, { useEffect, useState } from 'react'

const Product = ({ theme, styles }) => {


    const [product, setProduct] = useState(() => {
        let products = JSON.parse(localStorage.getItem("products"));

        return products.length>0 ? products : [
            {
                id: 1,
                name: "Gold Ring",
                price: 100,
                category: "ring"
            },
            {
                id: 2,
                name: " Diamond Necklace",
                price: 100,
                category: "necklace"
            }
        ]

    });

    const [newProduct, setNewProduct] = useState({
        name: "",
        price: null,
        category: ""
    });

    useEffect(()=>{
        localStorage.setItem("products",JSON.stringify(product))
    },[product])

    const onNewChange = (e) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value})
    }

    const addProduct = (e) => {
        e.preventDefault();

        let newId = product.length > 0 ? Math.max(...product.map((prod) => prod.id) )+ 1 : 1

        setProduct([...product, { ...newProduct, id: newId }]);
        setNewProduct({
            name: "",
            price:"",
            category: ""
        });
    }

    const onDelete = (e,productID)=>{
        e.preventDefault();
        console.log(productID)
        setProduct(product.filter((prod)=>prod.id != productID))
    }

    const them = styles[theme];


    return (
        <div class="container">
            {/* <!-- Add Product Form --> */}
            <div class="add-product-container">
                <h2>Add Product</h2>
                <form onSubmit={(e)=>addProduct(e)} class="add-product-form">
                    <label htmlFor="product-name">Product Name</label>
                    <input name="name" onChange={(e)=>onNewChange(e)} type="text" id="product-name" placeholder="Enter product name" />

                    <label htmlFor="product-price">Price</label>
                    <input name="price" onChange={(e)=>onNewChange(e)}  type="number" id="product-price" placeholder="Enter price" />

                    <label htmlFor="product-category">Category</label>
                    <select  onChange={(e)=>onNewChange(e)} name="category" id="product-category">
                        <option value="ring">Ring</option>
                        <option value="necklace">Necklace</option>
                        <option value="bracelet">Bracelet</option>
                        <option value="earrings">Earrings</option>
                    </select>
                    <button type="submit">Add Product</button>
                </form>
            </div>

            {/* <!-- Product Table --> */}
            <div class="product-table-container">
                <h2>Product List</h2>
                <table class="product-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map((prod) => (
                                <tr key={prod.id}>
                                    <td>{prod.name}</td>
                                    <td>${prod.price}</td>
                                    <td>{prod.category}</td>
                                    <td>
                                        <button>Edit</button>
                                        <button onClick={(e)=>{onDelete(e,prod.id)}}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Product