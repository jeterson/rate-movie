import './style.css'
import {ReactComponent as GithubIcon} from 'assets/images/github-icon.svg';

export default function Navbar() {
  return (
    <header>
      <nav className="j-navbar">
        <div className="j-title">Rate Movie</div>

        <a href="https://github.com/jeterson" target="_blank" rel="noreferrer">
          <div className="j-user">
            <div className="j-icon">
            <GithubIcon />
            </div>
            <div className="j-name">/jeterson</div>
          </div>
        </a>
      </nav>
    </header>
  )
}