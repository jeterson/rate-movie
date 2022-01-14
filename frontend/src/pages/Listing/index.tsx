import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/request";
import './style.css'
export default function Listing() {

  axios.get(`${BASE_URL}/movies`)
  .then(res => {
    console.log(res.data)
  })

  return (
    <div className="j-listing-page">
      <div className="j-listing-pagination-container">
        <Pagination />
      </div>
      <div className="j-listing-page-container">
        <MovieCard className="j-movie-card-item" />
        <MovieCard className="j-movie-card-item" />
        <MovieCard className="j-movie-card-item" />
        <MovieCard className="j-movie-card-item" />
        <MovieCard className="j-movie-card-item" />
        <MovieCard className="j-movie-card-item" />
        <MovieCard className="j-movie-card-item" />
        
        
      </div>
    </div>
  )
}