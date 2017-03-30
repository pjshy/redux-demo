import { connect, MapDispatchToPropsObject } from 'react-redux'
import { IncrementComponent } from './increment.component'

import { AppUIState } from './../../interface'
import { increment } from './../../store'

export interface MapStateToProps {
  count: number
}

export interface MapDispatchToProps extends MapDispatchToPropsObject {
  onCountChange: () => void
}

const mapAppStateToProps = (state: AppUIState): MapStateToProps => {
  return {
    count: state.count
  }
}

const mapAppDispatchToProps: MapDispatchToProps = {
  onCountChange: increment
}

export const IncrementContainer = connect(
  mapAppStateToProps,
  mapAppDispatchToProps
)(IncrementComponent)
