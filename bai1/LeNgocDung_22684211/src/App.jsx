import { useState } from 'react'
import './App.css'
import Header from '../component/Header/Header.jsx';
import Footer from '../component/Footer/Footer.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Footer></Footer>
        
    </>
  )
}

export default App
