import './preview-image.styles.scss';

const PreviewImage = ({img, index, title}) => {
  return (
    <figure className={`preview__img-${index}`}>
        <img src={img} alt={title} className="preview__img" />
      </figure>
  )
}

export default PreviewImage;