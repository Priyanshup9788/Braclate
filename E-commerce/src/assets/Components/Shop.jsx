import React from 'react'

const Shop = () => {
  return (
    <section class="shop">
    <div class="shop-container">
       {/* Sidebar Filter */}
      <aside class="sidebar">
        <h3>Filter By</h3>
        <div class="filter-category">
          <h4>Category</h4>
          <ul>
            <li><input type="checkbox" id="necklaces" /><label for="necklaces">Necklaces</label></li>
            <li><input type="checkbox" id="rings" /><label for="rings">Rings</label></li>
            <li><input type="checkbox" id="bracelets" /><label for="bracelets">Bracelets</label></li>
            <li><input type="checkbox" id="earrings" /><label for="earrings">Earrings</label></li>
          </ul>
        </div>

        <div class="filter-category">
          <h4>Price</h4>
          <ul>
            <li><input type="radio" name="price" id="price1" /><label for="price1">Under $200</label></li>
            <li><input type="radio" name="price" id="price2" /><label for="price2">$200 - $500</label></li>
            <li><input type="radio" name="price" id="price3" /><label for="price3">Above $500</label></li>
          </ul>
        </div>

        <div class="filter-category">
          <h4>Material</h4>
          <ul>
            <li><input type="checkbox" id="gold" /><label for="gold">Gold</label></li>
            <li><input type="checkbox" id="silver" /><label for="silver">Silver</label></li>
            <li><input type="checkbox" id="diamond" /><label for="diamond">Diamond</label></li>
          </ul>
        </div>
      </aside>

      {/* Product Listings  */}
      <div class="product-listing">
        <h2>Shop Our Collection</h2>
        <div class="product-grid">
          <div class="product-item">
            <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/L/JL00073-YGP900_11_listfront.jpg" alt="Gold Necklace" />
            <h3>Gold Necklace</h3>
            <p>$500</p>
            <a href="#" class="cta-btn">View Details</a>
          </div>
          <div class="product-item">
            <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08036-1CP900_11_listfront.jpg" alt="Diamond Ring" />
            <h3>Diamond Ring</h3>
            <p>$1200</p>
            <a href="#" class="cta-btn">View Details</a>
          </div>
          <div class="product-item">
            <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/T/UT01639-PR0000_11_listfront.jpg" alt="Silver Bracelet" />
            <h3>Silver Bracelet</h3>
            <p>$150</p>
            <a href="#" class="cta-btn">View Details</a>
          </div>
          <div class="product-item">
            <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE00952-PTP900_11_listfront.jpg" alt="Platinum Earrings" />
            <h3>Platinum Earrings</h3>
            <p>$800</p>
            <a href="#" class="cta-btn">View Details</a>
          </div>
          {/* Add more product items here */}
        </div>
      </div>
    </div>
  </section>

  )
}

export default Shop