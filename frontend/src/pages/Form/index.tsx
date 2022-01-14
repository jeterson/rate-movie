import axios from "axios";
import FormCard from "components/FormCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "types/movie";
import { BASE_URL } from "utils/request";

export default function Form() {
  const params = useParams();
  const [movie, setMovie] = useState<Movie>()
  useEffect(() => {
    axios.get(`${BASE_URL}/movies/${params.movieId}`)
      .then(res => {
        setMovie(res.data)
      })
  }, [params])


  return (
    <FormCard movie={movie} />
  )
}