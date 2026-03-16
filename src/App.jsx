import './App.css'
import Navbar from './components/Navbar'
import LightRaysBackground from './BitsStore/LightRaysBackground'

function App() {

  return (
    <>
      <div className="min-h-screen flex flex-col bg-black">
        <LightRaysBackground/>
        <Navbar/>
      </div>
    </>
  )
}

export default App
