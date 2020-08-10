import React from 'react'
import searchIt from './services/searchIt'
import AnimalCard from './AnimalCard'
import PropTypes from 'prop-types'

const AllCards = (props) => {
  // console.log(props)
  return(
    <div style={{marginLeft: '400px', padding: '0px'}}>
    <div className="ui three stackable cards">
      {props.animals.filter(searchIt(props.searchTerm)).map((animal) => {
                return (
                  <AnimalCard key={animal.animalId} 
                              animal={animal} 
                              handleDiscard={props.handleDiscard} 
                              handleLike={props.handleLike} 
                              handleDislike={props.handleDislike}/>
                );
              })}
    </div>
    </div>
  )

}

export default AllCards;

AllCards.propTypes = {
  animals: PropTypes.array,
  handleDiscard: PropTypes.func,
  searchTerm: PropTypes.string
}