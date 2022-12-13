
import { Link } from 'react-router-dom';
import Button, { BUTTON_TYPE } from '../button/button.conponent';
import HeadingFourth from '../text/heading-fourth/heading-fourth.conponent';
import './blog-item.styles.scss';

const BlogItem = ({img, time, title, slug}) => {
  const createTime = new Date(time)
  const date = createTime.getDate()
  const year = createTime.getFullYear()
  const month = createTime.getMonth()

  return (
    <div className="col col-4 news-respponsive">
      <div className="news">
        <figure className="news__img-box">
          <img src={img} alt={title} className="news__img"/>
        </figure>
        <div className="news__info">
          <div className="news__time">
            <i className="news__time__icon icon-basic-webpage-img-txt"></i>
            <span className="news__time__text">
              {`${date}/${month + 1}/${year}`}
            </span>
          </div>
          <HeadingFourth >{title}</HeadingFourth>
          <Link to={`/blog/${slug}`}>
            <Button type={ BUTTON_TYPE.OUTLINE }>Xem thêm</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogItem;