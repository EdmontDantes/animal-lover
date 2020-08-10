import React, {Component} from 'react'
import animals from './data/AnimalsData'
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

  handleSearch = () => {
    
  }

  render() {
    return(
      <div>
      <h1>Hello Begining of Animal Lover Assignment Homework</h1>
      </div>
    )
  }
}

export default App