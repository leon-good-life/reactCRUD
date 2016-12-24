import React from 'react'
import _ from 'lodash'

const whichClass = (column, state) => state.column === column ?
  state.direction : ''

const TableHeaders = ({columns, state, setSortState, showActions}) =>
  <tr>
    columns.map((column, i)=>
      <th key={'column'+i}
        onClick={()=>setSortState(column, state)}
        className={whichClass(column, state)}
        >{_.startCase(column)}</th>)

    {showActions ? <th>Actions</th> : null}
  </tr>

export default TableHeaders
