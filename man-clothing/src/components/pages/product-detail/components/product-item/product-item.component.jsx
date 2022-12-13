import { useEffect, useState } from 'react';
import ModalProduct from '../../../../modal/modal-product/modal-product.component';
import './product-item.styles.scss';
const ProductItem = ({imageDetail, slug}) => {  
  const [showImage, setShowImage] = useState(imageDetail && imageDetail[0]?.id)
  const [showModal, setShowModal] = useState(false)

  const handleCloseModal = () => {
    setShowModal(false)
  }

  useEffect(() => {
    setShowImage(imageDetail && imageDetail[0]?.id)
  }, [imageDetail])
 
  return (
    <div className="product">
        <div className="grid wide">
          <div className="row row-reverse">
            <div className="col col-4 product-item-left-responsive">
              <ul className="product__thumbs">
                {imageDetail && imageDetail.map(image => 
                  <li 
                    key={image.id} 
                    className="product__thumb" 
                    onClick = {() => setShowImage(image.id)}
                  >
                  <img src={image.image_thumb} alt={slug} className={`product__thumb-img ${showImage === image.id ? 'active' : ''}`}/>
                </li>)}
              </ul>
            </div>
            <div className="col col-8 product-item-right-responsive">
              <div className="product__big">
              {imageDetail && imageDetail.map(image => <img 
                key={image.id} 
                src={image.image} alt={slug} 
                className={`product__big-img ${showImage === image.id ? 'active': ''}`}
                onClick = {() => setShowModal(true)}     
              />)}              
              
              </div>
            </div>
          </div>
        </div>
        {showModal && <ModalProduct onClose = {handleCloseModal} images={imageDetail} showImage={showImage}/>}
      </div> 
     
  )
}
export default ProductItem;