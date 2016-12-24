import React, { Component } from 'react'
import _ from 'lodash'
import './Grid.css'

class Grid extends Component {
  constructor(props) {
    super(props)
    if (this.props.data.length === 0) {
      return
    }
    this.sortRows = this.sortRows.bind(this)
    this.setSortState = this.setSortState.bind(this)
    this.whichClass = this.whichClass.bind(this)

    const columns = Object.keys(this.props.data[0])
    const hiddenColumns = this.props.hiddenColumns || []
    this.columns = _.difference(columns, hiddenColumns)
    this.actions = this.props.actions || []

    this.DIRECTIONS = {ASC:'asc', DESC:'desc'}

    this.state = {
      column: this.columns[0],
      direction: this.DIRECTIONS.ASC
    }
  }
  render() {
    if (this.props.data.length === 0) {
      return (<span>No data.</span>)
    }
    const tableHeaders = this.columns.map((column, i)=>
      <th key={'column'+i}
          onClick={()=>this.setSortState(column)}
          className={this.whichClass(column)}
          >{_.startCase(column)}</th>
    )
    const cells = (row, i)=>this.columns.map((column, j)=>
      <td key={i+','+j}>{row[column]}</td>
    )
    const actionButtons = (row)=>this.actions.map((action, i)=>
      <button key={'action'+i}
              onClick={()=>action.fn(row)}
              >{action.name}</button>
    )
    const tableRows = this.sortRows().map((row, i)=>
      <tr key={'row'+i}>
        {cells(row, i)}
        {this.actions.length ? <td>{actionButtons(row)}</td> : null}
      </tr>
    )
    return (
      <table>
        <tbody>
          <tr>
            {tableHeaders}
            {this.actions.length ? <th>Actions</th> : null}
          </tr>
          {tableRows}
        </tbody>
      </table>
    )
  }
  sortRows() {
    let rows = this.props.data
    let column = this.state.column
    let direction = this.state.direction
    return _.orderBy(rows, [row => row[column].toLowerCase()], [direction])
  }
  setSortState(column) {
    let changeDirection = direction => direction === this.DIRECTIONS.DESC ?
      this.DIRECTIONS.ASC : this.DIRECTIONS.DESC

    let direction = this.state.column === column ?
      changeDirection(this.state.direction) : this.DIRECTIONS.ASC

    this.setState({ direction, column })
  }
  whichClass(column) {
    return this.state.column === column ? this.state.direction : ''
  }
}

export default Grid
