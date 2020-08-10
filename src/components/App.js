import React, {Component, Fragment} from 'react'
import animals from './data/AnimalsData'
import Header from './Header'
import AllCards from './AllCards'
import Search from './Search'
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

  handleLike = () => {

  }

  handleDislike = () => {

  }

  handleSearch = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    return(
      <Fragment>
      <div>
      <Header />
      <Search handleSearch={this.handleSearch} searchTerm={this.state.searchTerm}/>
      <AllCards animals={this.state.animals} searchTerm={this.state.searchTerm} handleDiscard={this.handleDiscard} />
      </div>
      
      </Fragment>
    )
  }
}

export default App