import './style.css'
import { useNavigate } from 'react-router-dom'
import { Movie } from 'types/movie';
import axios from 'axios';
import { BASE_URL } from 'utils/request';




type FormCardProps = {
  movie?: Movie
}
export default function FormCard({ movie }: FormCardProps) {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      score: { value: number };
    };
    const email = target.email.value
    const score = target.score.value

    const payload = {
      movieId: movie?.id,
      email: email,
      score: score
    }
    console.log(payload)
    axios.put(`${BASE_URL}/scores`, payload)
      .then(res => {        
        navigate('/')
      })
  }
  return (
    <div className="j-page">
      <div className="j-card">
        <div className="j-image-container">
          {
            !movie ? <span className="j-image-loading">Carregando</span> :
              <img alt={movie?.title} className="j-image" src={movie?.image} />
          }
        </div>
        <div className="j-form-title">{movie?.title}</div>
        <form className="j-form" onSubmit={handleSubmit}>

          <div className="j-input-container">
            <label htmlFor="email">Informe seu email</label>
            <input required type="email" name="email" id="email" />
          </div>
          <div className="j-spacing" />
          <div className="j-input-container">
            <label htmlFor="email">Informe sua avaliação</label>
            <select required name="score" id="score" className="j-rating">
              <option value={1} style={{ height: '100px' }}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
          <div className="j-spacing-lg" />
          <div className="j-form-actions">
            <button>Salvar</button>
            <button onClick={() => navigate('/')} type="button">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  )
}