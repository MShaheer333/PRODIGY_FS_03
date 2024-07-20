import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
import { FaCartArrowDown } from "react-icons/fa";




const Navbar = ({setData,cart}) => {
  // console.log(useLocation())
  const location = useLocation()
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("")

  const filterByCategory = (category)=>{
    const element = items.filter((product)=>product.category === category)
    // console.log(element)
    setData(element)
  }

  const filterByPrice = (price) =>{
    const element = items.filter((product)=>product.price >=price)
    setData(element)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")
  }


  return (
    <>
    <header className='sticky-top'>
        <div className="nav-bar">
            <Link to={'/'} className="brand">E-Commerce</Link>

            <form
            // onClick={handleSubmit} 
            onSubmit={handleSubmit}
             className="search-bar">
                <input 
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                type="text"
                 placeholder='Search Products'
                  />
            </form>


            <Link to={'/cart'} className="cart">
            <button type="button" className="btn btn-primary position-relative">
  <FaCartArrowDown  style={{fontSize:'1.5rem'}} />
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
            </Link>
        </div>

        {
          location.pathname == '/' && (
            <div className="nav-bar-wrapper">
            <div className="items">Categories {"->"}</div>
            <div 
            onClick={()=>setData(items)}
            className="items">All Categories</div>
            <div 
            onClick={()=>filterByCategory('mens')}
             className="items">Men's Clothes</div>
            <div
            onClick={()=>filterByCategory('womens')}
    
             className="items">Womens Clothes</div>
            <div
            onClick={()=>filterByCategory('child')}
    
             className="items">Children Clothes</div>
            <div
            onClick={()=>filterByPrice(2999)}
            className="items">{">="}2999</div>
            <div
            onClick={()=>filterByPrice(4999)}
            className="items">{">="}4999</div>
            <div
            onClick={()=>filterByPrice(6999)}
            className="items">{">="}6999</div>
            <div
            onClick={()=>filterByPrice(8999)}
            className="items">{">="}8999</div>
            
            </div>
          )
        }

      
    </header>
    </>
  )
}

export default Navbar