import { useState, useEffect } from 'react'
import type { CartoonType } from './types/cartoonInterface'
import CartoonList from './components/CartoonList'
import CartoonStatistics from './components/CartoonStatistics'


function App() {
  const [cartoons, setCartoons] = useState<CartoonType[]>([])

  useEffect(() => { //It runs when the component renders for the first time

    fetch('./rajzfilmek.json') //It fetches the data from the JSON file

      .then(response => response.json()) //It converts the response to JSON
      
      .then(data => setCartoons(data)) //It sets the data to the state

    console.log("Cartoons loaded successfully!") //Random ass text

  }, []) //The empty array means that the effect will run only once


  // USE useState for set the value/STATE of a variable
  // USE useEffect for run a function when the component renders for the first time (or when a variable changes)




  return (
    <>
    <main className="container bg-light no-border rounded-4 p-5" id="mainContainer">
      <h1 className="h1 text-center text-dark mb-5">Cartoons</h1>
      <CartoonList cartoons={cartoons} />
      <CartoonStatistics cartoons={cartoons} />
    </main>
    </>
  )
}

export default App
