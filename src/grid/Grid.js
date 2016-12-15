import React, { Component } from 'react';
import './Grid.css';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.titleCase = this.titleCase.bind(this);
    this.columnNames = this.columnNames.bind(this);
  }
  render() {
    return (
      <table>
        <tbody>
          <tr>
            {this.columnNames().map(columnName=>(
              <th>{this.titleCase(columnName)}</th>
            ))}
          </tr>

          {this.props.data.map(rowObj=>(
            <tr>
              {this.columnNames().map(item=>(
                <td>{rowObj[item]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  // Convert camelCase to Title Case:
  titleCase(camelCase) {
    return camelCase
      // insert a space between lower & upper
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      // space before last upper in a sequence followed by lower
      .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
      // uppercase the first character
      .replace(/^./, str=>str.toUpperCase());
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
