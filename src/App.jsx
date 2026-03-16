import './App.css'
import Navbar from './components/Navbar'
import LightRays from "./BitsStore/LightRays";


function App() {

  return (
    <>
      <div className="min-h-screen flex flex-col bg-black">

          <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true} />        
        <Navbar/>
      </div>
    </>
  )
}

export default App
