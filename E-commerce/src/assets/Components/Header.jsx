import React from 'react'

const Header = ({theme,styles,activeTab ,setActiveTab}) => {

  const navItems = [
    { id: "home", lable: "Home" },
    { id: "shop", lable: "Shop" },
    { id: "Collections", lable: "Collections" },
    { id: "About", lable: "About Us" },
    { id: "Contact", lable: "Contact" },
  ];

  const them = styles[theme];



  console.log(them)


  return (
    <header>
    <nav style={them} className="navbar">
      <div className="logo">
        <a style={{color:them.color}} href="#">Jewelry Store</a>
      </div>
      <ul className="nav-links">
        {
          navItems.map((item)=>(
            <li key={item.id} style={{color: activeTab=== item.id ? "red" : them.color , cursor: "pointer"} } onClick={()=>setActiveTab(item.id)} >{item.lable}</li>
          ))
        }
        
        
      </ul>
      <div className="cart">
        <a href="#">Cart (0)</a>
      </div>
    </nav>
  </header>
  )
}

export default Header