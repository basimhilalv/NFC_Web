import React from 'react'
import './FoodTile.css'
import { food_list } from '../assets/assets'
const FoodTile = ({ category }) => {
    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list.map((item, index) => {
                    if (category === "All" || category === item.category) {

                        return (
                            <div>
                                <div className='food-item'>
                                    <div className="food-item-img-container">
                                        <img src={item.image} alt="" className="food-item-image" />
                                    </div>
                                    <div className="food-item-info">
                                        <div className="food-item-name-rating">
                                            <p>{item.name}</p>
                                        </div>
                                        <p className="food-item-desc">{item.description}</p>
                                        <p className="food-item-price">${item.price}</p>
                                    </div>
                                </div>
                            </div>
                        )
                        //<FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    }
                })}
            </div>
        </div>
    )
}

export default FoodTile
