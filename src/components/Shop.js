import {React,useEffect,useState} from 'react'
import Item from './Item'
import LoadingBar from 'react-top-loading-bar'
const Shop = (props) => {
  
  const [pro, setpro] = useState(0)
    const [data, setdata] = useState([])
    const fetchdata = async()=>{
let response  = await fetch(`http://localhost/api/shop/${props.link}`)
setpro(30)
response =  await response.json()
setpro(50)
setdata(response.data)
setpro(100)
    }
useEffect(() => {
 fetchdata();

}, [])

    
  return ( <> 
  
    <div className="container" >

						<div className="row">
              <h2>

              </h2>
  {data.map((element)=>{
    return <div className="col-md-3 mx-4 my-3" key={element._id}>
      <Item 
    name = {element.name}
    price = {element.price}
    img = {element.img}
    description = {element.description}
    id = {element._id}
    brand={element.brand}
    alt = 'internal server issue'
    />
    </div>
  })}
</div>
</div>

    </>
  )
}
export default Shop