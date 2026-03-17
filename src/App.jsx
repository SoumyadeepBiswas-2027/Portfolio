import './App.css'
import Navbar from './components/Navbar'
import LightRaysBackground from './BitsStore/LightRaysBackground'
import Home from './components/Home';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <LightRaysBackground />
      <div className="relative z-10 flex flex-col flex-1">
        <Navbar />
        <Home />
      </div>
    </div>
  )
}

export default App;