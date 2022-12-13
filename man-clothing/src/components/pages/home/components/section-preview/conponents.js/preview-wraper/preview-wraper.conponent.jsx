import { useSelector } from 'react-redux';
import { selectProducts } from '../../../../../../../util/store/products/product.selector';
import PreviewImage from '../preview-image/preview-image.conponent';
import './preview-wraper.styles.scss';

const PreviewWraper = () => {

  const products = useSelector(selectProducts)
  const productPreviewList = products && products.map( (product, index) => index < 6 && <PreviewImage key={index} img={product.product_image} title={product.product_name} index={index+1} />)
  return (
    <div className="preview__wraper">
      {productPreviewList}
     
    </div>
  )
}
export default PreviewWraper;