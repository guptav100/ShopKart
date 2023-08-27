import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Items.css';

const Items = () => {
  const [products, setProducts] = useState([]);
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    
    fetchData();
  }, []);

  const filteredProducts = products.filter(product => product.category === selectedCategory);

  const handleCategoryClick = category => {
    setSelectedCategory(category);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="product-category-list">
      <h2 className='heading'>New Products</h2>
      <div className="category-menu">
        {categories.map(category => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="category">
        <h2>{selectedCategory}</h2>
        <Slider {...sliderSettings}>
          {filteredProducts.map(product => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.title} />
              <p className="product-title">{product.title}</p>
              <p className="product-price">${product.price}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Items;
