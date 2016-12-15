import React, { Component } from 'react';
import './Grid.css';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.columnNames = this.columnNames.bind(this);
  }
  render() {
    return (
      <table>
        <tr>
          {this.columnNames().map(columnName=>(
              <th>{columnName}</th>
          ))}
        </tr>
        {this.props.data.map(rowObj=>(
          <tr>
            {this.columnNames().map(item=>(
              <td>{rowObj[item]}</td>
            ))}
          </tr>
        ))}
      </table>
    );
  }
  columnNames() {
    let columnNames = Object.keys(this.props.data[0]);
    for (let i = 0; i < columnNames.length; i++) {
      for (let hiddenColumn of this.props.hiddenColumns) {
        if (hiddenColumn === columnNames[i]) {
          columnNames.splice(i, 1);
        }
      }
    }
    return columnNames;
  }
}

export default Grid;
