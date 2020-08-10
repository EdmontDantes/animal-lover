import React from 'react'


const Likes = (props) => {
  // const { image, name } = props.likes;
  // console.log(props);
  return (
    <div style={{padding: '10px'}}>
    <div className="ui link cards">
    <h1 style={{WebkitTextStrokeColor: 'green', WebkitTextStrokeWidth: '1px', fontSize: '3em', color: 'lightblue'}}>Liked</h1>
    {props.likes.map((likedAnimal) => {
      return (

        <div key={likedAnimal.animalId} className="card">
          <div className="image">
            <img src={likedAnimal.image} alt='...' />
          </div>
          <div className="content">
            <div className="header">{likedAnimal.name}</div>
          </div>
      
          </div>

      )


    })}
    </div>


    </div>
  )  
}

export default Likes