import React from 'react'

const Navbar = () => {
    const btns ={
        display: "flex",
        justifyContent:"space-evenly",
    };
  return (
    <div style={btns}>
      
      <NavLink to ="/">Home</NavLink>
      <NavLink to ="/about/sawan">About Us</NavLink>
      <NavLink className="navlink" to="/contact">Conteact Us</NavLink>
    </div>
  )
}

export default Navbar
