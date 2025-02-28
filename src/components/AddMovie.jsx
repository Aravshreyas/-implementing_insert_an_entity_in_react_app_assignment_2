import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddMovie.css';

const AddMovie = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    title: '',
    director: '',
    genre: '',
    releaseYear: '',
    synopsis: '',
    posterUrl: ''
  });

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Movie Submitted:', movie);
    navigate('/'); // Navigate back to the Dashboard
  };

  return (
    <div className="add-movie-container">
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:
          <input type="text" name="title" value={movie.title} onChange={handleChange} required />
        </label>
        <label>Director:
          <input type="text" name="director" value={movie.director} onChange={handleChange} required />
        </label>
        <label>Genre:
          <select name="genre" value={movie.genre} onChange={handleChange} required>
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Horror">Horror</option>
            <option value="Sci-Fi">Sci-Fi</option>
          </select>
        </label>
        <label>Release Year:
          <input type="number" name="releaseYear" value={movie.releaseYear} onChange={handleChange} required />
        </label>
        <label>Synopsis:
          <textarea name="synopsis" value={movie.synopsis} onChange={handleChange} required />
        </label>
        <label>Poster Image URL:
          <input type="url" name="posterUrl" value={movie.posterUrl} onChange={handleChange} required />
        </label>
        <div className="button-group">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;