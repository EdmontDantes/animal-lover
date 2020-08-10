import React from 'react'
import PropTypes from 'prop-types'

const Search = (props) => {
  return(
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginBottom: '40px', marginTop: '20px', marginLeft: '400px'}}>
      <h2>Search Animals by Type:</h2>
      <form action="" className="ui form">
      <div className="field">
        <input type='text' placeholder='Search by animal Type' onChange={props.handleSearch} value={props.searchTerm} />
      </div>
    </form>
    </div>
  )
}

export default Search

Search.propTypes = {
  handleSearch: PropTypes.func,
  searchTerm: PropTypes.string
}