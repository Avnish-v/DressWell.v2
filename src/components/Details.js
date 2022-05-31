import React from 'react'
import { Link } from 'react-router-dom'
const Details = (props) => {
    const {img,description,id,brand, price,name ,sname ,salt , simg , sprice, sid} =  props
  return (
    <>
    <div className='mx-4  my-3'>
 <img src={img.slice(18)}  width = "500" height = "550"alt="error"/>
 <h2>{name}</h2>
 <h2><b>{brand}</b></h2>{price}*inr
 <p>{description}</p>
 </div>
 {/* <div className='container' style={{backgroudColor:"white"}}>


 <Link to={`/ProductDet/?id=${sid}`} style={{color:"black", textDecoration:"none"}}>
    <div className="card" style={{width: "15rem", border:"none"}} >
  {/* <img src={simg.slice(18)} width="100" height="165" className="card-img-top" alt={salt}/> */}
  {/* <div className="card-body " style={{backgroundColor:"gray"}}>
    <h5 className="card-title">{sname.length <=  19 ? sname : sname.slice(20)}</h5>{sprice}
    <p className="card-text"><b>{brand}</b></p>
    <Link to="/AddToCart" className="btn btn-secondary">add to cart</Link>
    <Link to = "/WishList"><i className="fa fa-heart-o mx-4" style={{textDecoration : "none" , color:"red" , fontSize:"1.8rem" , marginTop:"2px"}} aria-hidden="true" ><button  style = {{display:"none"}}></button></i></Link>

  </div>
</div>
</Link>
     </div> */} 

  
        </>
  )
}

export default Details