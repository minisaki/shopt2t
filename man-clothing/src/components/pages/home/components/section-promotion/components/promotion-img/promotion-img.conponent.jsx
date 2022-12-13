import './promotion-img.styles.scss';

const PromotionImg = ({productImg, rate, title}) => {
  return (
    <figure className="promotion__img-box">
      <img src={productImg} alt={title} className="promotion__img" />
      <div className="promotion__ticker">
        <span className="promotion__ticker-sale">
          Giảm
        </span>
        <span className="promotion__ticker-price">
          {rate}%
        </span>
      </div>
    </figure>
  )
}

export default PromotionImg;