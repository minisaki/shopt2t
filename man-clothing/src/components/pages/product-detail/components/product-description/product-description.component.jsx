import ProductDescriptionHeader from './product-description-header.component';
import GridLayout from '../../../../layout/grid/grid.component';
import './product-description.styles.scss';

const ProductDescription = ({description}) => {
  return (    
			<div className="description">
				{description && <GridLayout>
					<div className="col col-12">
						<ProductDescriptionHeader/>
						<div className="description__content">
							<p className="heading-paragrapy" dangerouslySetInnerHTML={{__html: description}}>
							</p>
						</div>
					</div>
				</GridLayout>}
			</div>
		
  )
}

export default ProductDescription;