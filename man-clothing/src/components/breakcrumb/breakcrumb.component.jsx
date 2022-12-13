import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './breakcrumb.styles.scss';

const Breakcrumb = () => {

  const location = useLocation()
  const refPath = useRef('')
  const pathList = location.pathname.split('/').map((path, index) => {
    if (index > 0) {
      refPath.current += `/${path}`
      return <Link to={refPath.current} key={index} className="breakcrumb__item">{path}</Link>
    }
    return undefined
  })
  
  return (
    <div className="breakcrumb">
      <ul className="breakcrumb__list">
        <Link to='/' className="breakcrumb__item"> Home </Link>
        {/* <li className="breakcrumb__item">{location.pathname.replaceAll('/', '> ')}</li>
         */}
         {pathList}
      </ul>
    </div>
  )
}
export default Breakcrumb;