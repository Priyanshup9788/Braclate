
import { useState } from 'react'
import './App.css'
import Footer from './assets/Components/Footer'
import Header from './assets/Components/Header'
import Home from './assets/Components/Home'
import Shop from './assets/Components/Shop'
import About from './assets/Components/About'
import User from './assets/Components/User'

function App() {

  const styles = {
    light: {
      backgroundColor: "#f9f9f9",
      color: "#333"
    },
    dark: {
      backgroundColor: "#333",
      color: "#f9f9f9"
    },
  };
  
  const [theme,setTheme]=useState("light");
  const [activeTab, setActiveTab] = useState("home");

  return (
    <>
      <Header theme={theme} styles={styles} activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab==="home" && <Home theme={theme} styles={styles} />}
      {activeTab==="shop" && <Shop />}
      {activeTab==="About" && <About />}
      {activeTab==="user" && <User />}
      
      <Footer />
    </>
  )
}

export default App
