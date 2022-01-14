import './style.css'
import { useNavigate } from 'react-router-dom'
import { FormEvent, useState } from 'react';
import { Movie } from 'types/movie';


type FormCardProps = {
  movie?: Movie
}

export default function FormCard({ movie }: FormCardProps) {
  const navigate = useNavigate();  

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    navigate('/')
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
            <input id="email" />
          </div>
          <div className="j-spacing" />
          <div className="j-input-container">
            <label htmlFor="email">Informe sua avaliação</label>
            <select id="email" className="j-rating">
              <option style={{ height: '100px' }}>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
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