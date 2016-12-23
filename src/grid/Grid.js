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

    this.DIRECTIONS = {ASC:'ASC', DESC:'DESC'};

    this.state = {
      orderColumn: this.columnNames[0],
      orderDirection: this.DIRECTIONS.DESC
    };
  }
  render() {
    if (this.props.data.length === 0) {
      return (<span>No data.</span>);
    }
    return (
      <table>
        <tbody>
          <tr>
            {this.columnNames.map((columnName, i)=>(
              <th key={'columnName'+i}
                  onClick={()=>this.setSortState(columnName)}
                  className={this.whichClass(columnName)}
                  >{_.startCase(columnName)}</th>
            ))}
            <th>Actions</th>
          </tr>

          {this.sortRows().map((rowObj, i)=>(
            <tr key={'row'+i}>
              {this.columnNames.map((item, j)=>(
                <td key={i+','+j}>{rowObj[item]}</td>
              ))}

                <td>
                  {this.props.actions.map((action, k)=>(
                    <button key={'action'+k}
                            onClick={()=>action.fn(rowObj)}
                            >{action.name}</button>
                  ))}
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  sortRows() {
    let soretedRows = [];
    let rows = this.props.data;
    let column = this.state.orderColumn;
    let direction = this.state.orderDirection;
    if(direction === this.DIRECTIONS.DESC){
      soretedRows = _.orderBy(rows, [row => row[column].toLowerCase()], ['desc']);
    } else {
      soretedRows = _.orderBy(rows, [row => row[column].toLowerCase()], ['asc']);
    }
    return soretedRows;
  }
  setSortState(columnName) {
    if (this.state.orderColumn === columnName) {
      this.setState({
        orderDirection: this.state.orderDirection === this.DIRECTIONS.DESC ?
          this.DIRECTIONS.ASC : this.DIRECTIONS.DESC
      });
    } else {
      this.setState({
        orderDirection: this.DIRECTIONS.DESC,
        orderColumn: columnName
      });
    }
  }
  whichClass(columnName) {
    if (this.state.orderColumn === columnName) {
      return this.state.orderDirection.toLowerCase();
    }
    return '';
  }
}

export default Grid;
