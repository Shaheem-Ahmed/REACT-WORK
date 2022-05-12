
import './index';
import {useState} from "react"
import Card from './card';
function App(){
  const[arr, setArray]= useState([{title:"Ferrari", price:"900000", color:"white"},{title:"Fortuner", price:"3000", color:"blue"},{title:"Toyota", price:"500000", color:"black"}]);
  let addToCart = ()=> {
    console.log("Add To Cart");
  };
  

  return (
    <alert>
    <div className='App'>
      <header className='App-header'>
        {arr.map((e)=>(
          <Card title={e.title} price={e.price}  color={e.color} image={e.image}action={addToCart}/>
          ))}
{arr.map((e)=>(
          <Card title={e.title} price={e.price}  color={e.color} image={e.image}action={addToCart}/>
          ))}
        
      </header>
    </div>
    </alert>
  );
}


 


      
      



export default App;
