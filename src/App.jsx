import { useState } from 'react'
import { useEffect } from 'react'
import { Card } from './Card'

function App() {
  const [coffeeData, setCoffeeData] = useState([]);
  const [availables, setAvailables] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const resopnse = await fetch(
        "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json");
      const data = await resopnse.json();
      setCoffeeData(data);
    }
    fetchData();
  }, [])
  
  function handleAll() {
    setAvailables(false);
  }

  function handleAvailable() {
    setAvailables(true);
  }

  function availableArr() {
    return coffeeData.filter(coffee => coffee.available);
  }

  return (
    <div className='container'> 
      <h1>Our Collection</h1>
      <p>Introducing our Coffee Collection, a selection of 
        unique coffees from different roast types and origins, 
        expertly roasted in small batches and shipped fresh weekly.</p>
      <div className='buttons'>
        <button className={availables ? null : "button-on"} onClick={handleAll}>All Products</button>
        <button className={availables ? "button-on" : null} onClick={handleAvailable}>Available Now</button>
      </div>
      <div className='coffee-list'>
        {availables 
        ? availableArr().map(coffee => <Card key={coffee.id} coffee={coffee} />) 
        : coffeeData.map(coffee => <Card key={coffee.id} coffee={coffee} />)}
      </div>
    </div>
  )
}

export default App
