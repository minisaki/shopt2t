import Banner from './components/banner.component';
import { useSelector } from 'react-redux';
import { selectCategories, selectIsLoading } from '../../../../../util/store/categories/categories.selector';

import './section-banner.styles.scss';
import GridLayout from '../../../../layout/grid/grid.component';

const SectionBanner = () => {
  const categories  = useSelector(selectCategories)
  const isLoading  = useSelector(selectIsLoading)
  console.log(categories)

  const renderCategoryList = categories.map((category, index) => {    

    const classType = index === 0 ? 'col-o-6 col-6 banner__responsive' : index % 2 === 0 ? 'col-6 banner__responsive' : 'col-6 banner__responsive'
        return (
          <div key={index} className={`col ${classType}`}>
            <Banner 
              title={category.title}
              image={category.image}
              type={`${index + 1}`}
              bannerText={`banner__text--${index + 1}`}
              slug={category.slug}
            />							
          </div>
        )
      
    
  })
  return (
    <section className="section-banner">
			<GridLayout>
        {isLoading ? 'loading...' : renderCategoryList}
      </GridLayout>
		</section>
  )
}
export default SectionBanner;