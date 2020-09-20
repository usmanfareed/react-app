import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  render() {
    if (this.state.movies.length === 0) return <h2>No data to show</h2>;

    return (
      <React.Fragment>
        {/*{" "}
        {this.state.movies.length === 0 ? (
          <h2>Showing {this.state.movies.length} movies in database</h2>
        ) : (
          <h2>No data to show</h2>
        )}{" "}
        */}
        <table className="table">
          <h2>Showing {this.state.movies.length} movies in database</h2>

          <thead>
            <tr>
              <th scoh2e="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rent Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <th>{movie.title}</th>
                <th>{movie.genre.name}</th>
                <th>{movie.numberInStock}</th>
                <th>{movie.dailyRentalRate}</th>
                <th>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDeleteMovie(movie._id)}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }

  handleDeleteMovie = (e) => {
    const movies = this.state.movies.filter((x) => x._id != e);
    this.setState({
      movies,
    });
  };
  // handleDeleteMovie = (e) => {
  //   deleteMovie(e);
  //   this.setState({
  //     movies: getMovies(),
  //   });
  // };
}

export default Movies;
