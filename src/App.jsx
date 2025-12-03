import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Apology from './pages/Apology'
import Memories from './pages/Memories'
import Messages from './pages/Messages'
import FlowerGarden from './pages/FlowerGardern'
import About from './pages/About'

function App() {
  

  return (
<div className="app-root">
<Navbar />
<main>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/apology" element={<Apology />} />
<Route path="/memories" element={<Memories />} />
<Route path="/message" element={<Messages />} />
<Route path="/flowers" element={<FlowerGarden />} />
<Route path="/about" element={<About />} />
</Routes>
</main>
<footer className="credit">Made with moonlight & moonflowers</footer>
</div>
  )
}

export default App
