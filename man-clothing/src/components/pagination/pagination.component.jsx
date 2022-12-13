import { createSearchParams, useNavigate } from 'react-router-dom';
import './pagination.styles.scss';

const Pagination = ({page, next, prev, total, filter}) => {
  const navigate = useNavigate()
  const handleChangePage = (page) => {
    navigate({
      search: createSearchParams({
        ...filter,
        page
      }).toString()
    })
  }
  return (
    <div className="pagination">
        <ul className="pagination__list">
          {prev && (<li className="pagination__item" onClick={() =>  handleChangePage(prev)}>{prev}</li>)}
          <li className="pagination__item active">{page}</li>
          {next && (<li className="pagination__item" onClick={() =>  handleChangePage(next)}>{next}</li>)}
          {next && total - next > 2 && (<li className="pagination__item no-hover">...</li> )}
          {next && total - next > 2 && (<li className="pagination__item" onClick={() =>  handleChangePage(total)}>{total}</li>)}          
          
        </ul>
      </div>
  )
}

export default Pagination;