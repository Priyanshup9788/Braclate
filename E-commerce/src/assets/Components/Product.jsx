import React, { useState } from 'react'

const Product = ({ theme, styles }) => {


    const [product, setProduct] = useState(() => {
        let products = JSON.parse(localStorage.getItem("products"));

        return products ? products : [
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
    })

    const addProduct = (e) => {

    }

    const them = styles[theme];


    return (
        <div class="container">
            {/* <!-- Add Product Form --> */}
            <div class="add-product-container">
                <h2>Add Product</h2>
                <form class="add-product-form">
                    <label for="product-name">Product Name</label>
                    <input type="text" id="product-name" placeholder="Enter product name" />

                    <label for="product-price">Price</label>
                    <input type="number" id="product-price" placeholder="Enter price" />

                    <label for="product-category">Category</label>
                    <select id="product-category">
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
                        <tr>
                            <td>Gold Ring</td>
                            <td>$250</td>
                            <td>Ring</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Diamond Necklace</td>
                            <td>$1200</td>
                            <td>Necklace</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Product