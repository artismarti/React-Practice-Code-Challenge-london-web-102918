import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = props => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => {
          return (
            <Sushi
              sushi={sushi}
              eatSushi={props.eatSushi}
              eaten={props.eaten}
            />
          )
        })}
        <MoreButton incrementCounter={props.incrementCounter} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
