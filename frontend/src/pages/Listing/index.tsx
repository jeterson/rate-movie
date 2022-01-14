import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/request";
import './style.css'
export default function Listing() {  
  const [page, setPage] = useState<MoviePage|undefined>()
  const [pageNumber, setPageNumber] = useState(0)

  useEffect(() => {
    axios.get(`${BASE_URL}/movies?pageNumber${pageNumber}`)
    .then(res => {
      setPage(res.data as MoviePage)
    })
  }, [pageNumber])

  const handleNextPage = () => {
    setPageNumber(pageNumber+1)    
    console.log(pageNumber)
  }
  const handlePrevPage = () => {
    setPageNumber(pageNumber-1)
  }

  return (
    <div className="j-listing-page">
      <div className="j-listing-pagination-container">
        <Pagination onNext={() => handleNextPage()} onPrev={() => handlePrevPage()} page={page} />
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