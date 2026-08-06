import { Link } from 'react-router-dom'
import { MapPin, Home } from 'lucide-react'
import './NotFoundPage.css'

function NotFoundPage() {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <div className="not-found__code">404</div>
        <h1 className="not-found__title">Level not found</h1>
        <p className="not-found__message">
          You've wandered off the map. Even the best explorers get lost sometimes!
        </p>
        <Link to="/" className="not-found__link">
          <Home size={20} aria-hidden />
          Back to Home
        </Link>
      </div>
      <div className="not-found__icon" aria-hidden>
        <MapPin size={120} strokeWidth={1.2} />
      </div>
    </div>
  )
}

export default NotFoundPage
