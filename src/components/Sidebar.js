import React from 'react'
import Likes from './Likes'
import Dislikes from './Dislikes'
const Sidebar = (props) => {

  return(

      <div className="ui visible wide right vertical sidebar">
        <Likes likes={props.likes} />
        <Dislikes dislikes={props.dislikes} />
      </div>
    

 
  )

}

export default Sidebar