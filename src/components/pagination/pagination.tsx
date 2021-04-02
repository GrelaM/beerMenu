import './pagination.css'
import { Link, useParams } from 'react-router-dom'

import Button from '../../components/button/button'

interface PaginationProps {
    lastPage: boolean
}

const Pagination: React.FC<PaginationProps> = props => {
  let pageParam: { page: string } = useParams()

  const nextPage = (type: string) => {
    let page: string
    if (type === 'next') {
      (page = (Number(pageParam.page) + 1).toString())
      return page
    } else if (type === 'prev') {
      (page = (Number(pageParam.page) - 1).toString())
      return page
    }
  }

  return (
    <div className="pagination__box">
      {Number(pageParam.page) !== 1 ? (
        <Link to={`/list/page/${nextPage('prev')}`}>
          <Button name={'Prev'} />
        </Link>
      ) : null}
      <h2>{pageParam.page}</h2>
      {props.lastPage ? null : 
      <Link to={`/list/page/${nextPage('next')}`}>
        <Button name={'Next'} />
      </Link>}
    </div>
  )
}

export default Pagination
