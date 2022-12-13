import { Route, Routes } from 'react-router-dom';
import BlogDetail from '../../components/pages/blog-detail/blog-detail.component';
import Blog from '../../components/pages/blog/blog.component';


const BlogPage = () => {
  return (
    <Routes>
      <Route index element={<Blog/>} />
      <Route path=":blogSlug" element={<BlogDetail/>} />
    </Routes> 
  )
}
export default BlogPage;