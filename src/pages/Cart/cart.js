import Navbar from "../../Components/Navbar/navbar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from "react-redux";
import './cart.css';
function Cart() {
  
    
    const selectedProducts = useSelector(state => state.cart)
    const cards = selectedProducts.map(item => (
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
            {/* <Button variant="primary" onClick={()  => addToCart(item)}>ADD TO BAG</Button> */}
          </Card.Body>
        </Card>
        </div>
      ))
    return(
        <div>
       <Navbar/>
       <div className="grid-container">{cards}</div>
       </div>
       
    )
}
export default Cart