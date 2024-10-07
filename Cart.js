import { useState , useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cart(){


    const[cartProduct,setCartProduct]=useState([]);

    useEffect(()=>{
        if(localStorage.getItem('cartProduct')){
            setCartProduct(JSON.parse( localStorage.getItem('cartProduct'))) ;
        }

    },[]);
    return(
        <Container>

    
    <h2>CART</h2>
    <Row>

      <Col sm>
      {cartProduct.length > 0 ?(
        <div>


        </div>
      ):(
        <div>
<img src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" height='200px' width='300px'/>
<h3 className='text-danger'>Missing Cart Items</h3>
        </div>
      ) }
        
        </Col>  
    </Row>

    </Container>
    )
}
export default Cart; 