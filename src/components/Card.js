import React from 'react'
import { Row , Col ,Card} from 'react-bootstrap';
import { Zoom } from 'react-reveal';
 const CardLists = ({itemData}) => {
  return (
    <Row>
      <Zoom rigth >
      {

        itemData.length >= 1?(itemData.map((item)=> {

          return (
            <Col Key={item.id} sm="12" className='mb-3'>
            <Card className='d-flex flex-row' style={{ backgroundColor: "#F8F8F8" }}>
                        <Card.Img className='img-item' variant="top" src={item.imgurl}  />
                        <Card.Body>
                          <Card.Title className='d-flex justify-content-between ' >
                            
                         <div  className='item-title'>{item.title}</div> 
                         <div  className='item-price'>{item.price}</div> 
                          </Card.Title>
                          <Card.Text className='py-2'>
                           <div className='description'> {item.description}
                           </div>
            
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      </Col>
          )
        })) : <h3 className="text-center"> There are no items
        </h3>
      }
     </Zoom>
    </Row>
  )
}

export default CardLists;