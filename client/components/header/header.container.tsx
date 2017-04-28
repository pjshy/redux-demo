import { connect, MapDispatchToPropsObject } from 'react-redux'

import { addTodo } from '../../store'
import { HeaderComponent } from './header.component'

export interface MapDispatchToProps extends MapDispatchToPropsObject {
  addTodo: (text: string) => void
}

const mapAppDispatchToProps: MapDispatchToProps = {
  addTodo
}

export const HeaderContainer = connect(() => {}, mapAppDispatchToProps)(HeaderComponent)
