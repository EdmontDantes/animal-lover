import React, {Component, Fragment} from 'react'
import animals from './data/AnimalsData'
import Header from './Header'
import AnimalCard from './AnimalCard'
class App extends Component {
  state = {
    animals: animals.slice(),
    likes: [],
    dislikes: [],
    searchTerm: ''
  }

  handleDiscard = () => {

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
      <h1>Hello Begining of Animal Lover Assignment Homework</h1>
      </div>
      <AnimalCard />
      
      </Fragment>
    )
  }
}

export default App