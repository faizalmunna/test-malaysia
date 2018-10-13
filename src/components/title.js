import React from 'react'
import {Jumbotron} from 'reactstrap'
export default ({title}) => {
  return (
    <Jumbotron style = {{backgroundColor:"#aa00ff",color:"white"}}>
      <h2>{title}</h2>
     </Jumbotron>
    
  )
}
