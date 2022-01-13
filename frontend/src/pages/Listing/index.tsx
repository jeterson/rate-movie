import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import './style.css'
export default function Listing() {
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