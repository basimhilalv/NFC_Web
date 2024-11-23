import React, { useState } from 'react'
import './Home.css'
import Header from '../components/Header'
import MenuCategory from '../components/MenuCategory'
import FoodTile from '../components/FoodTile'
const Home = () => {

  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <MenuCategory category={category} setCategory={setCategory} />
      <FoodTile category={category}/>
    </div>
  )
}

export default Home
