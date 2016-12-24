import React, { Component } from 'react'
import _ from 'lodash'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import './Grid.css'

class Grid extends Component {
  constructor(props) {
    super(props)
    if (this.props.data.length === 0) {
      return
    }
    this.sortRows = this.sortRows.bind(this)
    this.setSortState = this.setSortState.bind(this)

    const columns = Object.keys(this.props.data[0])
    const hiddenColumns = this.props.hiddenColumns || []
    this.columns = _.difference(columns, hiddenColumns)

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
    const actions = this.props.actions || []
    return (
      <table>
        <TableHeader columns={this.columns}
                      setSortState={this.setSortState}
                      state={this.state}
                      showActions={!!actions.length} />

        <TableBody rows={this.sortRows()}
                   columns={this.columns}
                   actions={actions} />
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
}

export default Grid
