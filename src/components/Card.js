import React from 'react'
import { Row , Col ,Card} from 'react-bootstrap';

 const CardLists = () => {
  return (
    <Row>
        <Col sm="12" className='mb-3'>
<Card className='d-flex flex-row' style={{ backgroundColor: "#F8F8F8" }}>
            <Card.Img className='img-item' variant="top" src="4.jpg"  />
            <Card.Body>
              <Card.Title className='d-flex justify-content-between ' >
                
             <div  className='item-title'>Breakfast</div> 
             <div  className='item-price'>50 $</div> 
              </Card.Title>
              <Card.Text className='py-2'>
               <div className='description'>Breakfast recipe  Breakfast recipe Breakfast recipe  Breakfast recipe 
               </div>

              </Card.Text>
            </Card.Body>
          </Card>
          </Col> 
    </Row>
  )
}

export default CardLists;