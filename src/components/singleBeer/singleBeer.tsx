import { Card, Col } from 'antd'
import { Link } from 'react-router-dom'

import './singleBeer.css'
import Button from '../../components/button/button'

interface SingleBeerProps {
  id: number
  name: string
  url: string
  description: string
}

const SingleBeer: React.FC<SingleBeerProps> = (props) => {
  return (
    <div className="singleBeer__box">
      <div className="singleBeer__imgBox">
        <img alt="beer" className="singleBeer__imgSize" src={props.url} />
      </div>
      <Col span={8}>
        <Card title={props.name} bordered={false} className="singleBeer__card">
          <div className="singleBeer__main-text">{props.description}</div>
          <Link to={`/beer/${props.id}`}>
            <Button name={"View More"}/>
          </Link>
        </Card>
      </Col>
    </div>
  )
}

export default SingleBeer
