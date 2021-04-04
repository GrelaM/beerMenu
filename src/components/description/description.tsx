import './description.css'

import Button from '../../components/button/button'

interface State {
  url: string
  header: string
  description: string
  tips: string
  contributor: string
  history: any
}

const Description = (props: State) => {
  return (
    <div>
      {
        (props.url && props.header && props.description,
        props.tips,
        props.contributor !== '' ? (
          <div className="descriptionPage__displayBox">
            <img
              className="descriptionPage__pic"
              src={props.url}
              alt="beer-pic"
            />
            <h1 className="descriptionPage__header">{props.header}</h1>
            <p className="descriptionPage__description">{props.description}</p>
            <h1 className="descriptionPage__header">brewers tips</h1>
            <p className="descriptionPage__description">{props.tips}</p>
            <h6 className="descriptionPage__footer">
              Contributed by: <b>{props.contributor}</b>
            </h6>
          </div>
        ) : (
          <h1>Beer not found!</h1>
        ))
      }
      <Button name={'Return'} onClick={() => props.history.goBack()} />
    </div>
  )
}

export default Description
