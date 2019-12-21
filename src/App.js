import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

/*
object - props
*/
/*
AJAX - Asynchrous Javascript And XML ++ JSON ( Javascript Object Notation )
Using fetch attach AJAX on React
*/

class App extends Component {
  // Render : ComponentWillMount() -> render() -> componentDIdMount()
  // Update : ComponentReceiveProps() -> ShouldComponentUpdate() -> ComponentWillUpdate() -> render() -> componentDidMount()
  // Whenever state is changed, Component Updates, render happens

  // smart component have states
  // dumb component don't have state all they have props
  state = {    
  }

  componentDidMount() {
    fetch("https://yts.lt/api/v2/list_movies.json?sort_by=rating")
  }

/*
componentDidMount() {
  setTimeout(() => { // execute after certain amount of time
    //this.state.greeting = 'Something' // Should Never Write state directly, render thing does not updated
    this.setState({
      movies : [
        {
          id : 1,
          title: "Matrix",
          poster:   "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Ultimate_Matrix_Collection_poster.jpg/220px-Ultimate_Matrix_Collection_poster.jpg"
        },
        {
          id : 2,
          title: "Full Metal Jacket",
          poster:   "https://images2.minutemediacdn.com/image/upload/c_crop,h_2132,w_3794,x_0,y_22/f_auto,q_auto,w_1100/v1555155644/shape/mentalfloss/full-metal-jacket-hed.jpg",
        
        },
        {
          id : 3,
          title: "Old boy",
          poster:     "https://i.ytimg.com/vi/N36z1-WzUvk/maxresdefault.jpg",
      
        },  
        {
          id : 4,
          title: "Star Wars",
          poster: "https://i.ytimg.com/vi/j2GjT5O1G2Q/maxresdefault.jpg"
        }
      ]
      
    })
  }, 5000) // wait 5 seconds state changes automatically
}
*/


  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster = {movie.poster} key = {index} /> 
    })
    return movies
  }
  render() {
    console.log("render ");
    return (
      // if true or false
      <div className="App">
        {this.state.movies ? this._renderMovies() :  'loading'}
      </div>
    );
  }
}
export default App;

// array map() -> map create new array with the elements of the other array
// create new components using array map function
// react need key when it have so many elements.
// jsx needs {variables} 