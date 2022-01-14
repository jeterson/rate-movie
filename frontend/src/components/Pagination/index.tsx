import './style.css'
import { ReactComponent as PrevIcon } from 'assets/images/prev-icon.svg'
import { ReactComponent as NextIcon } from 'assets/images/next-icon.svg'
import { MoviePage } from 'types/movie'

type PaginationProps = {
  page: MoviePage,
  onChange: Function
}

export default function Pagination({page, ...props}: PaginationProps) {

  return (
    <div className="j-pagination-container">
      <div className="j-pagination-buttons">
        <button onClick={()=> props.onChange(page.number - 1)} disabled={page.first} className="j-pagination-btn j-btn-prev">
          <PrevIcon />
        </button>
        <span className="j-pagination-info">{`${(page.number ?? 0) + 1} de ${page.totalPages ?? 0}`}</span>
        <button onClick={()=> props.onChange(page.number + 1)} disabled={page.last} className="j-pagination-btn btn-next">
          <NextIcon />
        </button>
      </div>
    </div>
  )
}