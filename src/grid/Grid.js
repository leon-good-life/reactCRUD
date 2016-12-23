import React, { Component } from 'react';
import _ from 'lodash';
import './Grid.css';

class Grid extends Component {
  constructor(props) {
    super(props);
    if (this.props.data.length === 0) {
      return;
    }
    this.sortRows = this.sortRows.bind(this);
    this.setSortState = this.setSortState.bind(this);
    this.whichClass = this.whichClass.bind(this);

    let names = Object.keys(this.props.data[0]);
    let hiddenColumns = this.props.hiddenColumns;
    this.columnNames = _.difference(names, hiddenColumns);

    this.DIRECTIONS = {ASC:'asc', DESC:'desc'};

    this.state = {
      column: this.columnNames[0],
      direction: this.DIRECTIONS.DESC
    };
  }
  render() {
    if (this.props.data.length === 0) {
      return (<span>No data.</span>);
    }
    const tableHeaders = this.columnNames.map((columnName, i)=>(
      <th key={'columnName'+i}
          onClick={()=>this.setSortState(columnName)}
          className={this.whichClass(columnName)}
          >{_.startCase(columnName)}</th>
    ));
    const cells = (rowObj, i)=>this.columnNames.map((item, j)=>(
      <td key={i+','+j}>{rowObj[item]}</td>
    ));
    const actionButtons = (rowObj)=>this.props.actions.map((action, k)=>(
      <button key={'action'+k}
              onClick={()=>action.fn(rowObj)}
              >{action.name}</button>
    ));
    const tableRows = this.sortRows().map((rowObj, i)=>(
      <tr key={'row'+i}>
        {cells(rowObj, i)}
        <td>{actionButtons(rowObj)}</td>
      </tr>
    ));
    return (
      <table>
        <tbody>
          <tr>
            {tableHeaders}
            <th>Actions</th>
          </tr>
          {tableRows}
        </tbody>
      </table>
    );
  }
  sortRows() {
    let rows = this.props.data;
    let column = this.state.column;
    let direction = this.state.direction;
    return _.orderBy(rows, [row => row[column].toLowerCase()], [direction]);
  }
  setSortState(column) {
    let changeDirection = direction => direction === this.DIRECTIONS.DESC ?
      this.DIRECTIONS.ASC : this.DIRECTIONS.DESC;

    let direction = this.state.column === column ?
      changeDirection(this.state.direction) : this.DIRECTIONS.DESC;

    this.setState({ direction, column });
  }
  whichClass(column) {
    return this.state.column === column ? this.state.direction : '';
  }
}

export default Grid;
