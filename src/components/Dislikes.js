import React from 'react'


const Dislikes = (props) => {
  // const { image, name } = props.likes;
  // console.log(props);
  return (
    <div style={{padding: '10px'}}>
    <div className="ui link cards">
    <h1 style={{WebkitTextStrokeColor: 'blue', WebkitTextStrokeWidth: '1px', fontSize: '3em', color: 'lightcoral'}}>Disliked</h1>
    {props.dislikes.map((dislikedAnimal) => {
      return (

        <div key={dislikedAnimal.animalId} className="card">
          <div className="image">
            <img src={dislikedAnimal.image} alt='...' />
          </div>
          <div className="content">
            <div className="header">{dislikedAnimal.name}</div>
          </div>
          </div>
      )
    })}
    </div>


    </div>
  )  
}

export default Dislikes