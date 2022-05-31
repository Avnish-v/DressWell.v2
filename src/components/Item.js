import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  const {description,id,alt,price,name,img,brand}= props
  return (
    <>
   <Link to={`/ProductDet/?id=${id}`} style={{color:"black", textDecoration:"none"}}>
    <div className="card" style={{width: "15rem", border:"none"}} >
  <img src={img.slice(18)} width="100" height="165" className="card-img-top" alt={alt}/>
  <div className="card-body " style={{backgroundColor:"gray"}}>
    <h5 className="card-title">{name.length <=  19 ? name : name.slice(20)}</h5>{price}
    <p className="card-text"><b>{brand}</b></p>
    <Link to="/AddToCart" className="btn btn-secondary">add to cart</Link>
    <Link to = "/WishList"><i className="fa fa-heart-o mx-4" style={{textDecoration : "none" , color:"red" , fontSize:"1.8rem" , marginTop:"2px"}} aria-hidden="true" ><button  style = {{display:"none"}}></button></i></Link>

  </div>
</div>
</Link>
</>
  )
}

export default Item