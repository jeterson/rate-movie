import { ReactComponent as StarFull } from 'assets/images/star-full.svg'
import { ReactComponent as StarHalf } from 'assets/images/star-half.svg'
import { ReactComponent as StarEmpty } from 'assets/images/star-empty.svg'
import { HtmlHTMLAttributes } from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import { Movie } from 'types/movie'

type MovieCardProps = HtmlHTMLAttributes<HTMLElement> & {
  movie: Movie
}
export type MovieStarsProps = HtmlHTMLAttributes<HTMLElement> & {
  score: number
}

function getFills(score: number) {

  const fills = [0, 0, 0, 0, 0];

  const integerPart = Math.floor(score);

  for (let i = 0; i < integerPart; i++) {
    fills[i] = 1;
  }

  const diff = score - integerPart;
  if (diff > 0) {
    fills[integerPart] = 0.5;
  }

  return fills;
}

type StarProps = {
  fiil: number
}
const Star = ({fiil}: StarProps) => {
  switch(fiil){
    case 0:
      return <StarEmpty />
    case 1:
      return <StarFull />
    default:
      return <StarHalf />
  }
}
function MovieStars(props: MovieStarsProps) {
  const fiils = getFills(props.score)
  return (
    <div className="j-movie-stars-container">
     <Star fiil={fiils[0]} />
     <Star fiil={fiils[1]} />
     <Star fiil={fiils[2]} />
     <Star fiil={fiils[3]} />
     <Star fiil={fiils[4]} />    
    </div>
  )
}

export default function MovieCard({movie, ...props}: MovieCardProps) {
  return (
    <div {...props} className="j-movie-card-container" >
      <div className="j-movie-card-box">
        <div className="j-movie-card-image-container">
          <img alt={movie.title} src={movie.image} />
        </div>
        <div className="j-movie-card-title">
          <span>{movie.title}</span>
        </div>
        <div className="j-movie-card-score">
          <span>{movie.score > 0 ? movie.score.toFixed(1) : '-'}</span>
        </div>
        <div className="j-movie-card-stars">
          <MovieStars score={movie.score} />
          <span>{`${movie.count} ${movie.count === 1 ? ' avaliação' : ' avaliações'}`}</span>
        </div>

        <div className="j-movie-card-action">
          <Link to={`/form/${movie.id}`}>Avaliar</Link>
        </div>

      </div>
    </div>
  )
}