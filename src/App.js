import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

/*
object - props
*/
/*
AJAX - Asynchrous Javascript And XML ++ JSON ( Javascript Object Notation )
Using fetch attach AJAX on React

promise is new javascript concept - asynchronous programming
synchronous -> flow as order, wait until pre-job finished 
asynchronous -> it doesn't need finished before job

fetch & promise makes you create scenario and manipulate that

await & async


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
    this._getMovies();
  }

  _getMovies = async() => { // it doesn't block anything .. to wait
    const movies = await this._callAPI() // waiting ths._callAPI() finish, return values 
    this.setState({ // setState not start till await code getting finished
      movies
    })
    // 

  }

  _callAPI = () => {
    return fetch("https://yts.lt/api/v2/list_movies.json?sort_by=like_count")
      .then(response => response.json()) // arrow function , modern javascript, means return
      .then(json => json.data.movies)
      .catch(err => console.log(err))
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
    const movies = this.state.movies.map((movie) => {
      return <Movie title={movie.title} poster = {movie.large_cover_image} key = {movie.id} /> 
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