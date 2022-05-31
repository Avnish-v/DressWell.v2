import {React,useState,useEffect }from 'react'
import Details from './Details'
function ProductDet( props) {
  const [ID, setID] = useState([])
  const [suggestion, setsuggestion] = useState([])
  const params = new URLSearchParams(window.location.search)
  let data = params.get('id')
 const  productdata =  async ()=>{
let response  =  await fetch(`http://localhost/api/shop/productdata/?id=${data}`,{method : "GET" }) 
response  =  await response.json();
setID(response.data);
setsuggestion(response.Suggestion);
console.log(response.data ,"this is suggestion",response.Suggestion)
  }
 useEffect(() => {
  productdata();
 }, [])
  return (
    <>
    {ID.map((element)=>{
    return <div key={element._id}>
      <Details key={element._id} img = {element.img} brand={element.brand} price = {element.price}
      description = {element.description} id={element._id} name = {element.name}
      />
    </div>
     
    
{suggestion.map((element)=>{
return <div className="col-md-3 mx-4 my-3" key={element._id}>
<Details
key = {element._id}
sname = {element.name}
sprice = {element.price}
simg = {element.img}
sdescription = {element.description}
sid = {element._id}
sbrand={element.brand}
salt = 'internal server issue'
/>
</div>
})}

    })}
</>
  )
}

export default ProductDet