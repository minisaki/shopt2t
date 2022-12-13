import { useSelector } from 'react-redux';
import { selectBlogArray, selectBlogIsLoading } from '../../../../../util/store/blog/blog.selector';

import HeadingScondary from '../../../../text/heading-scondary/heading-secondary.component';
import HeadingTeriary from '../../../../text/heading-teriary/heading-teriary.component';
import BlogItem from '../../../../blog-item/blog-item.component';
import './section-news.styles.scss';
import GridLayout from '../../../../layout/grid/grid.component';

const News = () => {

	const blogArray = useSelector(selectBlogArray)
	const blogIsloading = useSelector(selectBlogIsLoading)

	const renderBlogItem = blogArray.map( blog => {
		return (
			<BlogItem key={blog.id} img={blog.blog_image} time={blog.create} title={blog.blog_title} slug={blog.blog_slug}/>
		)
	})
  return (
    <section className="section-news">
			<HeadingTeriary marginBottom >
				Bản tin thời trang
			</HeadingTeriary>
			<HeadingScondary marginBottom>
				Xu hướng mùa đông 2022
			</HeadingScondary>
			{blogIsloading ? 'loading...' : 
				<GridLayout>
					{renderBlogItem}
				</GridLayout>
			}
		</section>
  )
}
export default News;