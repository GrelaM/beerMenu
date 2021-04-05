import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import './singleBeerPage.css'

import Header from '../../components/header/header'
import Spinner from '../../components/spinner/spinner'
import Description from '../../components/description/description'

import { fetchSingleData } from '../../fetch_data/fetchData'

interface State {
  url: string
  header: string
  description: string
  tips: string
  contributor: string
}

const initialState = {
  url: '',
  header: '',
  description: '',
  tips: '',
  contributor: ''
}

const SinglePage = (props: {
  history: {
    goBack: VoidFunction
  }
}) => {
  const [state, setState] = useState<State>(initialState)
  const [isLoading, setIsLoading] = useState(false)

  let beerId: { id: string } = useParams()

  useEffect(() => {
    ;(async () => {
      const beerIdNum = Number(beerId.id)
      setIsLoading(true)

      const data = await fetchSingleData(beerIdNum)
      if (data.statusCode !== 404) {
        setState({
          url: data[0].image_url,
          header: data[0].name,
          description: data[0].description,
          tips: data[0].brewers_tips,
          contributor: data[0].contributed_by.split('<')[0]
        })
      } else {
        setState(initialState)
      }
      setIsLoading(false)
    })()
  }, [beerId.id])

  return (
    <div className="singlePage__box">
      <Header headerText={'You have chosen:'} />
      {isLoading ? (
        <Spinner />
      ) : (
        <Description
          url={state.url}
          header={state.header}
          description={state.description}
          tips={state.tips}
          contributor={state.contributor}
          history={props.history}
        />
      )}
    </div>
  )
}

export default SinglePage
