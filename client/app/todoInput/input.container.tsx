import { connect, MapDispatchToPropsObject } from 'react-redux'
import { InputComponent } from './input.component'

import { editTodo } from '../../store'
import { UIState } from '../../interface'

export interface MapStateToProps {
  text: string
}

export interface MapDispatchToProps extends MapDispatchToPropsObject {
  onChange : (text: string) => void
}

const mapAppStateToProps = (store: UIState): MapStateToProps => {
  return {
    text: store.text
  }
}

const mapAppDispatchToProps: MapDispatchToProps = {
  onChange: editTodo
}

connect(
  mapAppStateToProps,
  mapAppDispatchToProps
)(InputComponent)
