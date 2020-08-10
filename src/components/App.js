import React, {Component, Fragment} from 'react'
import animals from './data/AnimalsData'
import Header from './Header'
import AllCards from './AllCards'
import Search from './Search'
import Sidebar from './Sidebar'
class App extends Component {
  state = {
    animals: animals.slice(),
    likes: [],
    dislikes: [],
    searchTerm: ''
  }

  handleDiscard = (animalId) => {
    const updatedAnimals = this.state.animals.filter((animal) => animal.animalId !== animalId)
    // console.log(updatedAnimals);
    // console.log(animalId);
    this.setState({
      animals: updatedAnimals
    })
  }

  handleLike = (animalId) => {
    const currLikes = this.state.likes.slice()
    const currDislikes = this.state.dislikes.slice()
    const foundAnimal = this.state.animals.find((animal) => animal.animalId === animalId)
    const toCompareAlreadyLiked = currLikes.find((animal) => animal.animalId === animalId)
    const toCompareAlreadyDisliked = currDislikes.find((animal) => animal.animalId === animalId)
    const newDislikes = [...this.state.dislikes]
    // console.log('fa', foundAnimal)
    // console.log('tcal', toCompareAlreadyLiked)
    if(foundAnimal && (toCompareAlreadyLiked === undefined)) {
      currLikes.unshift(foundAnimal)
    } else if (toCompareAlreadyDisliked) {
      newDislikes = currDislikes.filter((animalToRemove) => animalToRemove.animalId !== animalId)
    }
        this.setState({
          likes: currLikes,
          dislikes: newDislikes
        })

  }

  handleDislike = (animalId) => {
    const currLikes = this.state.likes.slice()
    const currDislikes = this.state.dislikes.slice()
    const foundAnimal = this.state.animals.find((animal) => animal.animalId === animalId)
    const toCompareAlreadyLiked = currLikes.find((animal) => animal.animalId === animalId)
    const toCompareAlreadyDisliked = currDislikes.find((animal) => animal.animalId === animalId)
    const newLikes = [...this.state.likes]
    if(foundAnimal && (toCompareAlreadyDisliked === undefined)) {
      currDislikes.unshift(foundAnimal)
    } else if(toCompareAlreadyLiked) {
      newLikes = currLikes.filter((animalToRemove) => animalToRemove.animalId !== animalId)
    }
        this.setState({
          likes: newLikes,
          dislikes: currDislikes
        })
  }

  handleSearch = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    return(
      <Fragment>
      <Sidebar likes={this.state.likes} dislikes={this.state.dislikes}/>
    
      <div className="pusher">
      <Header />
          <Search handleSearch={this.handleSearch} searchTerm={this.state.searchTerm}/>
          <AllCards animals={this.state.animals} 
                    searchTerm={this.state.searchTerm} 
                    handleDiscard={this.handleDiscard} 
                    handleLike={this.handleLike} 
                    handleDislike={this.handleDislike} />
        </div>
      
      </Fragment>
    )
  }
}

export default App