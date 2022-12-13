import { Link } from "react-router-dom"
import './logo.styles.scss';

const Logo = () => {
  return (
    <Link to="/" className="logo__link">
        <img src="static/image/unnamed.png" alt="logo" className="logo__img" />
    </Link>
  )
}

export default Logo