import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import './listPage.css'
import SingleBeer from '../../components/singleBeer/singleBeer'
import Spinner from '../../components/spinner/spinner'
import Header from '../../components/header/header'
import Pagination from '../../components/pagination/pagination'

import { fetchData } from '../../fetch_data/fetchData'

function ListPage() {
  const [state, setState] = useState([])
  const [page] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  let pageParam: { page: string } = useParams()

  useEffect(() => {
    ;(async () => {
      const pageNum = Number(pageParam.page)
      setIsLoading(true)

      const data = await fetchData(pageNum)
      setState(data)
      setIsLoading(false)
    })()
  }, [page, pageParam.page])

  let beerList
  if (state) {
    const list = state
    beerList = list.map(
      (el: {
        id: number
        name: string
        image_url: string
        description: string
      }) => {
        return (
          <SingleBeer
            key={el.id}
            id={el.id}
            name={el.name}
            url={el.image_url}
            description={el.description}
          />
        )
      }
    )
  }

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="listPage__box">
          <Header headerText={'Beer Menu'} />
          <div className="beerList__box">
            {beerList}
            <Pagination lastPage={state.length < 20 ? true : false} />
          </div>
        </div>
      )}
    </div>
  )
}

export default ListPage
