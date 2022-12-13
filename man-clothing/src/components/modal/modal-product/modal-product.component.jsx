import { useState } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import './modal-product.styles.scss';

const ModalProduct = ({onClose, images, showImage}) => {
  const [count, setCount] = useState(images.findIndex(image => image.id === showImage))
  
  const handleIncrease = () => {
    if (count === images.length-1) {
      setCount(0)
    } else {
      setCount(count + 1)
    }
  }
  const handleDecrease = () => {
    if (count === 0) {
      setCount(images.length-1)
    } else {
      setCount(count- 1)
    }
  }
  return (
    <div className='modal'>
      <div className='modal__background' onClick={onClose}></div>
      <div className="modal__content">
        <div className="modal__left" onClick={handleDecrease}>
          <FiArrowLeft className="modal__icon"/>
        </div>
        <div className="modal__img-wrap">
          {images && images.map((image, index) => 
          <img 
            key={image.id} 
            src={image.image} 
            alt="" 
            className="modal__img" 
            style={{transform: `translateX(${(index-count) * 100}%)`}}
            onClick = {() => {
              window.open(
                image.image,
                '_blank'
              )
            }}
          />)}
          {/* style={{transform: `translateX(${index * 500}px)`}} */}
        </div>
        
        <div className="modal__right" onClick={handleIncrease}>
          <FiArrowRight className="modal__icon"/>
        </div>

      </div>
    </div>
    
  )
}
export default ModalProduct;