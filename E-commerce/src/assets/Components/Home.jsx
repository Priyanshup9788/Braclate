import React from 'react'

const Home = ({theme,styles}) => {

    const them = styles[theme];

    return (
        <div  style={{backgroundColor:them.backgroundColor}}>
            {/* Hero Section  */}
            <section class="hero">
                <div class="hero-content">
                    <h1>Discover Timeless Elegance</h1>
                    <p>Exclusive Jewelry Collections for Every Occasion</p>
                    <a href="#" class="cta-btn">Shop Now</a>
                </div>
            </section>

            {/* Featured Collections Section */}
            <section style={them}  class="collections">
                <h2>Featured Collections</h2>
                <div class="collection-grid">
                    <div class="collection-item">
                        <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/L/JL03518-RGP600_11_listfront.jpg"alt="Necklaces" />
                            <h3>Necklaces</h3>
                            <p>Elegant designs for every occasion</p>
                    </div>
                    <div class="collection-item">
                        <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/T/JT02334-1YP900_11_listfront.jpg" alt="Rings" />
                            <h3>Rings</h3>
                            <p>Beautiful and unique rings</p>
                    </div>
                    <div class="collection-item">
                        <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR05891-1RP600_11_listfront.jpg" alt="Bracelets" />
                            <h3>Bracelets</h3>
                            <p>Crafted with precision and care</p>
                    </div>
                </div>
            </section>

            {/* Trending Products Section */}
            <section  style={them}  class="trending-products">
                <h2>Trending Products</h2>
                <div class="product-grid">
                    <div class="product-item">
                        <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/L/JL00073-YGP900_11_listfront.jpg" alt="Product 1" />
                            <h3>Gold Necklace</h3>
                            <p>$500</p>
                            <a href="#" class="cta-btn">View Details</a>
                    </div>
                    <div class="product-item">
                        <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08036-1CP900_11_listfront.jpg" alt="Product 2" />
                            <h3>Diamond Ring</h3>
                            <p>$1200</p>
                            <a href="#" class="cta-btn">View Details</a>
                    </div>
                    <div class="product-item">
                        <img src="https://m.media-amazon.com/images/I/61L+eo6C4nL._AC_UY1100_.jpg" alt="Product 3" />
                            <h3>Silver Earrings</h3>
                            <p>$150</p>
                            <a href="#" class="cta-btn">View Details</a>
                    </div>
                </div>
            </section>
           
        </div>
    )
}

export default Home