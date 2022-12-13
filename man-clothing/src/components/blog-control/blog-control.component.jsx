import { useNavigate } from 'react-router-dom';
import './blog-control.styles.scss';

const BlogControl = ({next, prev}) => {
  const navigate = useNavigate()
  const handleChangePath = (option) => {
    navigate(`/blog/${option}`)
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: 'smooth'
    })
  }
  return (
    <div className="control">
      <div className="row">
        <div className="col col-6">
          {prev && <div className="control__wraper control__wraper--previous" onClick={() => handleChangePath(prev?.blog_slug)}>
            <div className="control__previous">
              &larr; Bài trước
            </div>
            <h4 className="heading-fourth">
              {prev?.blog_title}
            </h4>
          </div>}
        </div> 
        <div className="col col-6">
          {next && <div className="control__wraper control__wraper--next" onClick={() => handleChangePath(next?.blog_slug)}>
            <div className="control__next">
              &rarr; Tiếp theo
            </div>
            <h4 className="heading-fourth">
              {next?.blog_title}
            </h4>
          </div>	}
        </div>
      </div>
    </div>
  )
}
export default BlogControl;