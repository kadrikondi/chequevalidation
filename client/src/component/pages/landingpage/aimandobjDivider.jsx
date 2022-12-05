import React from 'react'
import {Button} from "react-bootstrap"
import {Link} from 'react-router-dom'
export default function aimandobjDivider() {
    return (
        <div style={{backgroundColor:'#97e5b0',color:'white'}} className="text-center">
          <Link to='/aimandobj'> <Button  variant="outline"size='lg'style={{color:'#fff',backgroundColor:'#095a24'}}> AIMS AND OBJECTIVE OF THE  BLACKMAN’S REVOLUTION</Button></Link> 
        </div>
    )
}
