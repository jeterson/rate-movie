import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage, moviePageDefault } from "types/movie";
import { BASE_URL } from "utils/request";
import './style.css'

export default function Listing() {
  const [page, setPage] = useState<MoviePage>(moviePageDefault())
  const [pageNumber, setPageNumber] = useState(0)

  useEffect(() => {
    console.log(pageNumber)
    axios.get(`${BASE_URL}/movies?page=${pageNumber}&sort=id&size=12`)
      .then(res => {
        setPage(res.data as MoviePage)
      })
  }, [pageNumber])

  const handlePageChange = (newPageNumber: number) => {
    setPageNumber(newPageNumber)        
  }

  return (
    <div className="j-listing-page">
      <div className="j-listing-pagination-container">
        <Pagination onChange={handlePageChange} page={page} />
      </div>
      <div className="j-listing-page-container">
        {
          page.content.map(movie => {
            return <MovieCard key={movie.id} movie={movie} />
          })
        }
      </div>
    </div>
  )
}