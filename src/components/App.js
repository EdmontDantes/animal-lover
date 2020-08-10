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
    const currLikes = this.state.likes
    const foundAnimal = this.state.animals.find((animal) => animal.animalId === animalId)
    const toCompareAlreadyLiked = currLikes.find((animal) => animal.animalId === animalId)
    // console.log('fa', foundAnimal)
    // console.log('tcal', toCompareAlreadyLiked)
    if(foundAnimal && (toCompareAlreadyLiked === undefined)) {
      currLikes.push(foundAnimal)
      this.setState({
        likes: currLikes
      })
    }
  }

  handleDislike = (animalId) => {
    let currDisikes = this.state.dislikes
  }

  handleSearch = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    return(
      <Fragment>
      <Sidebar likes={this.state.likes} />
    
      <div className="pusher">
      <Header />
          <Search handleSearch={this.handleSearch} searchTerm={this.state.searchTerm}/>
          <AllCards animals={this.state.animals} searchTerm={this.state.searchTerm} handleDiscard={this.handleDiscard} handleLike={this.handleLike} />
        </div>
   
      
      </Fragment>
    )
  }
}

export default App