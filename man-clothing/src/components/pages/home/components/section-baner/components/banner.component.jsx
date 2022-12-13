import { Link } from 'react-router-dom';
import Button from '../../../../../button/button.conponent';
import HeadingScondary from '../../../../../text/heading-scondary/heading-secondary.component';
import './banner.styles.scss';

const Banner = ({title, image, type, bannerText='', slug}) => {
  
  return (
    <Link to={`shop/?slug=${slug}`} className={`banner banner--${type}`}>
      <div className={`banner__text ${bannerText}`}>
          <HeadingScondary >
              {title}
          </HeadingScondary>
          <Button type='out-line'>
            Chi tiết
          </Button>
      </div>
      <div className="banner__img-box">
          <img src={image} alt={title} className="banner__img" />
      </div>
    </Link>
  )
}
export default Banner;