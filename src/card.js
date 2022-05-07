import './card.css'
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap'
export const Carding=({taskobject,index})=>{
    return(
        <>
     
     
      <Card className="card-content col-lg-3 col-md-6 col-sm-12 shadow rounded-3 p-3">     
        <CardBody className='card-body'>
          <CardTitle>{taskobject.Name}</CardTitle>
          <CardSubtitle className='text-dark' style={{Width:'10px',borderRadius:'10px',backgroundColor:'green',text:'bold',border:'2px'}}>Description</CardSubtitle>
          <CardText>{taskobject.Description}</CardText>
          <div className='row justify-content-end'>
          <Button className='col-4 btn-danger me-2'> Button</Button>
          <Button className='col-4 btn-warning'>Button</Button>
          </div>
          </CardBody>
      </Card>
  
    
    </>

  )
}

