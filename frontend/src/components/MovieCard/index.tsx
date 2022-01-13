import { ReactComponent as StarFull } from 'assets/images/star-full.svg'
import { ReactComponent as StarHalf } from 'assets/images/star-half.svg'
import { ReactComponent as StarEmpty } from 'assets/images/star-empty.svg'
import { HtmlHTMLAttributes } from 'react'
import {Link} from 'react-router-dom'
import './style.css'
const movie = {
  id: 1,
  image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
  title: "The Witcher",
  count: 2,
  score: 4.5
};

export type MovieCardProps = HtmlHTMLAttributes<HTMLElement> & {}
export type MovieStarsProps = HtmlHTMLAttributes<HTMLElement> & {}

function MovieStars(props: MovieStarsProps) {
  return (
    <div className="j-movie-stars-container">
      <StarFull />
      <StarFull />
      <StarFull />
      <StarHalf />
      <StarEmpty />
    </div>
  )
}

export default function MovieCard(props: MovieCardProps) {
  return (
    <div {...props} className="j-movie-card-container" >
      <div className="j-movie-card-box">
        <div className="j-movie-card-image-container">
          <img src={movie.image} />
        </div>
        <div className="j-movie-card-title">
          <span>{movie.title}</span>
        </div>
        <div className="j-movie-card-score">
          <span>{movie.score}</span>
        </div>
        <div className="j-movie-card-stars">
          <MovieStars />
          <span>{`${movie.count} ${movie.count == 1 ? ' avaliação' : ' avaliações'}`}</span>
        </div>

        <div className="j-movie-card-action">
          <Link to={`/form/${movie.id}`}>Avaliar</Link>
        </div>

      </div>
    </div>
  )
}