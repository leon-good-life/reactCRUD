import React, { Component } from 'react';
import './Grid.css';

class Grid extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <table>
        <tr>
          {Object.keys(this.props.data[0]).map(columnName=>(
              <th>{columnName}</th>
          ))}
        </tr>
        {this.props.data.map(rowObj=>(
          <tr>
            {Object.keys(rowObj).map(item=>(
              <td>{rowObj[item]}</td>
            ))}
          </tr>
        ))}
      </table>
    );
  }
}

export default Grid;
