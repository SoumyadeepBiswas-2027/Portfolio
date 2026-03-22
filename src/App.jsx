import './App.css'
import Navbar from './components/Navbar';
import LightRaysBackground from './BitsStore/LightRaysBackground';
import Layout from './components/Layout';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black overflow-y-auto">
      <LightRaysBackground />
      <div className="relative z-10 flex flex-col flex-1">
        <Navbar />
        <Layout />
      </div>
    </div>
  )
}

export default App;