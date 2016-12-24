import React, { Component } from 'react'
import _ from 'lodash'

const whichClass = (column, state) => state.column === column ?
  state.direction : ''

class TableHeaders extends Component {
  render() {
    const columns = this.props.columns
    const state = this.props.state
    const setSortState = this.props.setSortState
    const showActions = this.props.showActions
    return <tr>
      {columns.map((column, i)=>
        <th key={'column'+i}
          onClick={()=>setSortState(column, state)}
          className={whichClass(column, state)}
          >{_.startCase(column)}</th>)}

      {showActions ? <th>Actions</th> : null}
    </tr>
  }
}

export default TableHeaders
