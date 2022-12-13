import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBlogArray, selectBlogIsLoading } from '../../../util/store/blog/blog.selector';
import { fetchBlogAsync } from '../../../util/store/blog/blog.action';
import BlogItem from '../../blog-item/blog-item.component';
import SkeletonBlog from '../../skeleton/skeleton-blog.component';

import './blog.styles.scss';
import Breakcrumb from '../../breakcrumb/breakcrumb.component';
import HeadingPrimary from '../../text/heading-primary/heading-primary.conpponent';

const Blog = () => {
  const dispatch = useDispatch()
  const blogs = useSelector(selectBlogArray)
  const isLoading = useSelector(selectBlogIsLoading)  

  useEffect(() => {
    dispatch(fetchBlogAsync())
  }, [dispatch])
  
  return (
    <main>
    <Breakcrumb/>
    <section className="blog-header">
      <HeadingPrimary>
        Thời trang và cuộc sống
      </HeadingPrimary>
    </section>
    <section className="blog-details">
      <div className="grid wide">
				<div className="row">
          {isLoading ? 
          <SkeletonBlog/> : 
          blogs.map(blog => <BlogItem key={blog.id} img={blog.blog_image} time={blog.create} title={blog.blog_title} slug={blog.blog_slug}/>)}			
				</div>
			</div>
    </section>
	</main>
  )
}

export default Blog;