import { useState, useEffect } from 'react'
import type { CartoonType } from './types/cartoonInterface'
import CartoonList from './components/CartoonList'
import CartoonStatistics from './components/CartoonStatistics'


function App() {
  const [cartoons, setCartoons] = useState<CartoonType[]>([])

  useEffect(() => {
    fetch('./rajzfilmek.json')
      .then(response => response.json())
      .then(data => setCartoons(data))
    console.log("Cartoons loaded successfully!")
  }, [])

  return (
    <>
    <main className="container bg-light no-border rounded-4 p-4" id="mainContainer">
      <h1 className="h1 text-center text-dark mb-4">Cartoons</h1>
      <CartoonList cartoons={cartoons} />
      <CartoonStatistics cartoons={cartoons} />
    </main>
    </>
  )
}

export default App
