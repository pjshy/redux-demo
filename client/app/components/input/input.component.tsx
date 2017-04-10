import * as React from 'react'

interface Props {
  content: string
  onContentChange: (value: string) => void
  submitContent: () => void
}

export class InputItem extends React.PureComponent<Props, void> {

  static propTypes = {
    content: React.PropTypes.string.isRequired,
    onContentChange: React.PropTypes.func.isRequired,
    submitContent: React.PropTypes.func.isRequired
  }

  onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    const value = target.value.trim()
    this.props.onContentChange(value)
  }

  onSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e)
  }

  render() {
    return (
      <div className="content-component">
        <input
          className=""
          placeholder="TODO。。。。。。"
          onChange={ this.onChange }
          onMouseEnter={ this.onSubmit }
          defaultValue={ this.props.content }
        />
      </div>
    )
  }
}
