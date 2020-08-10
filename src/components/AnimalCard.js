import React from 'react'
import Button from './Button'
// import PropTypes from 'prop-types'

const AnimalCard = (props) => {
  const { image, type, name, description, animalId } = props.animal;
  console.log(props);
  return (
    <div>
    <div className="ui link cards">
  <div className="card">
    <div className="image">
      <img src={image} alt='...' />
    </div>
    <div className="content">
      <div className="header">{name}</div>
      <div className="meta">
      {type}
      </div>
      <div className="description">
        {description}
      </div>
    </div>
    <div className="extra content">
    <Button className="ui button" onClick={() => {
      props.handleDiscard(animalId)
    }}>Discard
    </Button>
    </div>
  </div>

</div>
    </div>
  )  
}

export default AnimalCard