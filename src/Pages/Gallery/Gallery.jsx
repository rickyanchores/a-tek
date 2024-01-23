import React from 'react';
import CardComponent from '../../Components/Card/Card';

const Gallery = () => {

  const cards = [
    {
      image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692846363993", // Add the correct image URL here
      name: "iPhone 15 Pro",
      price: "1300"
    },
    {
      image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=1692923776464", // Add the correct image URL here
      name: "iPhone 15",
      price: "900"
    },
    {
      image: "https://think-ecuador.com/wp-content/uploads/2021/12/MacBook_Pro_16-in_Space_Gray_PDP_Image_Position-1__MXLA.jpeg", // Add the correct image URL here
      name: "MacBook Pro",
      price: "1500"
    },
    {
      image: "https://think-ecuador.com/wp-content/uploads/2021/12/MacBook_Pro_16-in_Space_Gray_PDP_Image_Position-1__MXLA.jpeg", // Add the correct image URL here
      name: "MacBook Air",
      price: "1300"
    }
  ];

  return (
    <div className='Gallery'>
        <div className="left">
            <h1>New Arrivals</h1>
            <div className="card-container">
              {cards.map((card, index) => (
                <CardComponent key={index} image={card.image} name={card.name} price={card.price} />
              ))}
            </div>
        </div>
        <div className="right">
            <img src="https://media.karousell.com/media/photos/products/2022/7/22/apple_airpods_pro_with_magsafe_1658471799_a06fd3f7_progressive.jpg" alt="arrival image" />
        </div>
    </div>
  );
}

export default Gallery;
