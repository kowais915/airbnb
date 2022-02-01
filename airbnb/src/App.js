import Main from './components/Main';
import Nav from './components/Nav';
import Card from './components/Card';
import image from "./images/image12.png"

const para = "Oh man those are props by ";
const name = "Kathie";
const price = "$299"
const country = "USA";
const reviews = 53;

function App() {
  return (
   <>
    <Nav/>
    <Main/>

    <div className='cardList'>
        <Card 
      image={image}
      title={para}
      name = {name}
      price = {price}
      country = {country}
      review = {reviews}
  
         />



<Card 
      image={image}
      title={para}
      name = {name}
      price = {price}
      country = {country}
      review = {reviews}
  
         />




<Card 
      image={image}
      title={para}
      name = {name}
      price = {price}
      country = {country}
      review = {reviews}
  
         />


<Card 
      image={image}
      title={para}
      name = {name}
      price = {price}
      country = {country}
      review = {reviews}
  
         />

<Card 
      image={image}
      title={para}
      name = {name}
      price = {price}
      country = {country}
      review = {reviews}
  
         />


<Card 
      image={image}
      title={para}
      name = {name}
      price = {price}
      country = {country}
      review = {reviews}
  
         />

<Card 
      image={image}
      title={para}
      name = {name}
      price = {price}
      country = {country}
      review = {reviews}
  
         />

    </div>



  
   
   </>
  );
}

export default App;
