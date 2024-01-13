import Navbar from "../../Components/Navbar/navbar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UseHome from "../../Hooks/useHome/useHome";
import { useDispatch } from "react-redux";
import { add } from "../../Store/cartSlice";
import './home.css';


function Home() {
  const useData = UseHome();
const dispatch = useDispatch();
  const addToCart = (item) => {
// dispatch action
dispatch(add(item))
  }
  const cards = useData.map(item => (
    <div className="grid-item">
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} style={{width:'100px',height:'130px'}}/>
      <Card.Body>
      <Card.Text>
        {item.title}
        </Card.Text>
        <Card.Text>
         INR. {item.price}
        </Card.Text>
        <Button variant="primary" onClick={()  => addToCart(item)}>ADD TO BAG</Button>
      </Card.Body>
    </Card>
    </div>
  ))
  return (
    <div>
      <Navbar />
      {/* <div style={{backgroundColor:'yellow',height:'40px',color:'black'}}>{useData.map((item) => ( console.log("heyyuou",item.price)))}</div> */}
<div className="grid-container">
  {cards}
</div>
   

    </div>
  );
}
export default Home;
