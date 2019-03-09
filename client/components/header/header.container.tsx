import { connect, MapDispatchToPropsObject, MapStateToProps } from 'react-redux'

import { addTodo } from '../../store'
import { HeaderComponent } from './header.component'

export interface MapDispatchToProps extends MapDispatchToPropsObject {
  addTodo: (text: string) => void
}

const mapAppDispatchToProps: MapDispatchToProps = {
  addTodo,
}

const mapAppStateToProps: MapStateToProps<{}, {}> = () => {
  return {}
}

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/19989
export const HeaderContainer = connect(
  mapAppStateToProps,
  mapAppDispatchToProps,
)(HeaderComponent as any) as any
