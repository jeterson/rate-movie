import './style.css'
import {ReactComponent as PrevIcon} from 'assets/images/prev-icon.svg'
import {ReactComponent as NextIcon} from 'assets/images/next-icon.svg'



export default function Pagination() {
  return (
    <div className="j-pagination-container">
      <div className="j-pagination-buttons">
        <button disabled className="j-pagination-btn j-btn-prev">
          <PrevIcon />
        </button>
        <span className="j-pagination-info">{`${1} de ${3}`}</span>
        <button className="j-pagination-btn btn-next">
          <NextIcon />
        </button>
      </div>
    </div>
  )
}