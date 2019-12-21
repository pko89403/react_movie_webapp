//import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types'
import "./Movie.css";
/*
class Movie extends Component{

    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string
    } // checking correct type pf prop_types

    render() {
        // console.log(this.props)
        return (
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        );
    }   
} 

class MoviePoster extends Component {

    static propTypes = {
        poster : PropTypes.string.isRequired
    }
    
    render() {
        return(
            // parent give props to siblings
            <img src={this.props.poster}></img>
        )
    }
}
*/
// functional components
// no need state, no life cycle, some component just return need just one props
function Movie({title, poster, genres, synopsis}){
    return (
        <div className="Movie">
            <div className="Movie_Columns">
                <MoviePoster poster = {poster} alt={title}/>
            </div>
            <div className="Movie_Columns">
                <h1>{title}</h1>
                <div className = "Movie_Genres">
                    {genres.map((genre, index) => <MovieGenres genre={genre} key={index} />)}
                </div>
                <p className="Movie_Synopsis">
                    {synopsis}
                </p>
            </div>
        </div>
    )
}

Movie.prototype = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.string.isRequired,
    synopsis : PropTypes.string.isRequired
}
function MoviePoster({poster, alt}) {
    return (
        <img src = {poster} alt = {alt} className="Movie_Poster" />
    )
}
function MovieGenres({genre}) {
    return (
        <span className="Movie_Genre">{genre}</span>
    )
}
MoviePoster.prototype = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}
MovieGenres.prototype = {
    genre: PropTypes.string.isRequired
}
export default Movie