import './style.css'
import {ReactComponent as PrevIcon} from 'assets/images/prev-icon.svg'
import {ReactComponent as NextIcon} from 'assets/images/next-icon.svg'
import { MoviePage } from 'types/movie'
import { useState } from 'react'

export type PaginationProps = {
  page: MoviePage|undefined
  onNext: () => void
  onPrev: () => void
}

export default function Pagination(props: PaginationProps) { 

  const handleTeste = () => {
    console.log("Teste")
  }
  return (
    <div className="j-pagination-container">
      <div className="j-pagination-buttons">
        <button onClick={handleTeste} disabled className="j-pagination-btn j-btn-prev">
          <PrevIcon />
        </button>
        <span className="j-pagination-info">{`${(props.page?.number??0)+ 1} de ${props.page?.totalPages??0}`}</span>
        <button onClick={() => props.onPrev} className="j-pagination-btn btn-next">
          <NextIcon />
        </button>
      </div>
    </div>
  )
}