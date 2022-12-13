import { Fragment, useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchBlogAsync, fetchBlogDetailAsync } from '../../../util/store/blog/blog.action';
import { selectBlog, selectBlogArray, selectBlogIsLoading } from '../../../util/store/blog/blog.selector';
import BlogControl from '../../blog-control/blog-control.component';
import SkeletonHome from '../../skeleton/skeleton-home.component';
import './blog-detail.styles.scss';

const BlogDetail = () => {
  const {blogSlug} = useParams()
  const blog = useSelector(selectBlog)
  const blogs = useSelector(selectBlogArray)
  const isLoading = useSelector(selectBlogIsLoading)
  const [next, setNext] = useState('')
  const [prev, setPrev] = useState('')

  const createTime = new Date(blog.create)
  const date = createTime.getDate()
  const year = createTime.getFullYear()
  const month = createTime.getMonth()


  useEffect(() => {    
    const blogCurrent = blogs.findIndex( blogItem => {
      return blogItem.blog_slug === blog.blog_slug
    })
    
    setNext(blogs[blogCurrent + 1 % blogs.length])
    setPrev(blogs[blogCurrent - 1 % blogs.length])
  }, [blog, blogs])
  console.log(next, prev)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBlogDetailAsync(blogSlug))
    dispatch(fetchBlogAsync())
  }, [dispatch, blogSlug])
  
  return (
    <main>
      { isLoading ? 
        <SkeletonHome/> :
        <Fragment>
          <section className="blog-detail__header">
            <h2 className="heading-secondary">
              {blog.blog_title}
            </h2>
            <ul className="blog-detail__author">
              {/* <li className="blog-detail__name">{blog.blog_user}</li> */}
              <li className="blog-detail__name"> {`${date < 10 ? `0${date}` : date}/${month + 1}/${year}`}</li>
              {/* <li className="blog-detail__name">8 comments</li> */}
            </ul>
          </section>
          <section className="blog-detail__container">
            <div className="grid wide">
              <div className="row">
                <div className="col l-12">          
                  <figure className="blog-detail__img-box">
                    <img src={blog.blog_image} alt="" className="blog-detail__img"/>
                  </figure>
                  <div className="blog-detail__content">
                  <article>
                    <p className="heading-paragrapy" dangerouslySetInnerHTML={{__html: blog.blog_content}}>
                      </p>
                  </article>
                  {/* <div className="blog-detail__footer">
                    <div className="blog-detail__user">
                      <img src="./build/public/image/user/xblog-author.jpg" alt="" className="blog-detail__user-img"/>
                      <span className="blog-detail__user-name">Alidin hanlier</span>
                    </div>
                    <div className="blog-detail__tag">
                      <span className="tag">#Fashion</span>
                      <span className="tag">#trending</span>
                      <span className="tag">#2020</span>
                    </div>
                  </div> */}
                  </div>
                  <div className="blog-detail__content">
                    <BlogControl next={next} prev={prev}/>
                  </div>
                  {/* <div className="blog-detail__content">
                    <div className="comment">
                      <h4 className="heading-fourth">
                        leave a comment
                      </h4>
                      <FormComment/>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </section>
      </Fragment>
      }
    </main>
  )
}
export default BlogDetail;