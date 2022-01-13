import './style.css'
const movie = {
  id: 1,
  image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
  title: "The Witcher",
  count: 2,
  score: 4.5
};

export default function Form() {
  return (
    <div className="j-page">
      <div className="j-card">
        <div className="j-image-container">
          <img className="j-image" src={movie.image} />
        </div>
        <div className="j-form-title">{movie.title}</div>
        <form className="j-form">

          <div className="j-input-container">
            <label htmlFor="email">Informe seu email</label>
            <input id="email" />
          </div>
          <div className="j-spacing" />
          <div className="j-input-container">
            <label htmlFor="email">Informe sua avaliação</label>
            <select id="email" className="j-rating">
              <option style={{height: '100px'}}>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="j-spacing-lg" />
        <div className="j-form-actions">
          <button>Salvar</button>
          <button type="button">Cancelar</button>
        </div>
        </form>
      </div>
    </div>
  )
}