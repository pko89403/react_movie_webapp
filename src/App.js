import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

/*
object - props
*/

const movies = [
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

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return < Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}
export default App;

// array map() -> map create new array with the elements of the other array
// create new components using array map function
// react need key when it have so many elements.
// jsx needs {variables} 