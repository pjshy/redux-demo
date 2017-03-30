import * as React from 'react'

import {
  MapStateToProps,
  MapDispatchToProps
} from './increment.container'

import './style.styl'

type Props = MapStateToProps & MapDispatchToProps

export class IncrementComponent extends React.PureComponent<Props, void> {
  static propTypes = {
    count: React.PropTypes.number.isRequired,
    onCountChange: React.PropTypes.func.isRequired
  }

  onClick = () => {
    this.props.onCountChange()
  }

  render() {
    console.log('render')
    return (
      <div className="increment-view">
        { this.props.count }
        <button onClick={ this.onClick } className="item">增加</button>
      </div>
    )
  }
}
