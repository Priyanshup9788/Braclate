
import { useState } from 'react'
import './App.css'
import Footer from './assets/Components/Footer'
import Header from './assets/Components/Header'
import Home from './assets/Components/Home'
import Shop from './assets/Components/Shop'
import About from './assets/Components/About'
import User from './assets/Components/User'
import Product from './assets/Components/Product'

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

  const toggleTheme=()=>{
    theme==="dark"?setTheme("light"):setTheme("dark")
  }

  return (
    <>
      <Header theme={theme} styles={styles} activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab==="home" && <Home theme={theme} styles={styles} />}
      {activeTab==="shop" && <Shop  theme={theme} styles={styles} />}
      {activeTab==="About" && <About  theme={theme} styles={styles} />}
      {activeTab==="user" && <User  theme={theme} styles={styles} />}
      {activeTab==="Collections" && <Product theme={theme} styles={styles} />}
      <button style={{    fontSize:"20px",
    position: "fixed",
    bottom: "2%",
    right: "2%",
    borderRadius:"45%"
}} onClick={toggleTheme}>{theme==="dark"?"🌞":"🌙"}</button>
      <Footer />
    </>
  )
}

export default App
