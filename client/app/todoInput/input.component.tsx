import * as React from 'react'

import {
  MapStateToProps,
  MapDispatchToProps
} from './input.container'

type Props = MapStateToProps & MapDispatchToProps

export class InputComponent extends React.PureComponent<Props, void> {
  static propTypes = {
    text: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired
  }

  onChange = (e) => {
    this.props.onChange(e.target.value)
  }

  render() {
    return (
      <input
        type="text"
        value={ this.props.text }
        onChange={ this.onChange }/>
    )
  }
}
