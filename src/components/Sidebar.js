import React from 'react'
import Likes from './Likes'

const Sidebar = (props) => {

  return(

      <div className="ui visible wide right vertical sidebar">
        <Likes likes={props.likes} />
      </div>
    

 
  )

}

export default Sidebar