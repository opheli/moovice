import React, { Component } from 'react'
 
class Popular extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
    }
  }
 

  getMovie = async (movies) => {
    try {
      const result = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b8e16ff25f44004fe2ab5dedc9e0453e')
      const movies = await result.json()
      this.setState({
        movies
      })
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    return (
      <div>
       <h1>Popular</h1>
      </div>
    )
  }
}

export default Popular