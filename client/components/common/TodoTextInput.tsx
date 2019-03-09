import * as React from 'react'
import * as classNames from 'classnames'

interface Props {
  onSave: (text: string) => void
  text?: string
  placeholder?: string
  editing?: boolean
  newTodo?: boolean
}

interface State {
  text: string
}

export class TodoInput extends React.PureComponent<Props, State> {
  constructor (props, context) {
    super(props, context)
    this.state = {
      text: this.props.text || '',
    }
  }

  handleBlur = (e) => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value.trim())
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    })
  }

  handleSubmit = (e) => {
    const text = e.target.value.trim()
    if (text.length === 0) { return }
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({ text: '' })
      }
    }
  }

  render () {
    const classnames = classNames({
      'edit': this.props.editing,
      'new-todo': this.props.newTodo,
    })
    return (
      <input
        type='text'
        className={ classnames }
        placeholder={ this.props.placeholder }
        value={ this.state.text }
        autoFocus={ true }
        onBlur={ this.handleBlur }
        onChange={ this.handleChange }
        onKeyDown={ this.handleSubmit }
      />
    )
  }
}
