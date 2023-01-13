import React, { Component } from 'react';
import MoviesList, { getMovies } from './fake_movies'

class Movies extends Component {

    state = {
        movies: getMovies()
    }


    jakasfunckja(movie) {
        console.log(movie._id)
        this.setState({movies: this.state.movies.filter(oldmovie => oldmovie._id != movie._id)});
    }

    render(){
        return (
            <>
                <h1>{this.state.movies[0].title}</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rental rate</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.movies.map(movie => (
                                <tr>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td><button onClick={() =>this.jakasfunckja(movie)}>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </>
        )
    }
}

export default Movies;