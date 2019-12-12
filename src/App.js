import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

/*
object - props
*/


class App extends Component {
  // Render : ComponentWillMount() -> render() -> componentDIdMount()
  // Update : ComponentReceiveProps() -> ShouldComponentUpdate() -> ComponentWillUpdate() -> render() -> componentDidMount()
  // Whenever state is changed, Component Updates, render happens
  state = {
    greeting : "Hello!",
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
    
  }

  componentDidMount() {
    setTimeout(() => { // execute after certain amount of time
      //this.state.greeting = 'Something' // Should Never Write state directly, render thing does not updated
      this.setState({
        greeting: "Hello Again!"
      })
    }, 5000) // wait 5 seconds state changes automatically

    setTimeout(() => {
      console.log("Hello SetTimeout")
      this.setState({
        movies: [
          ...this.state.movies, // leave what the array had before
          {
            title: "WinterSoldier",
            poster: "https://uproxx.com/wp-content/uploads/2018/04/avengers-bucky.jpg"
          }
        ]
      })
    }, 5000)
  }
  render() {
    console.log("render ");
    return (
      <div className="App">
        {this.state.greeting} 
        {this.state.movies.map((movie, index) => {
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