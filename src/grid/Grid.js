import React, { Component } from 'react';
import './Grid.css';

class Grid extends Component {
  constructor(props) {
    super(props);
    if (this.props.data.length === 0) {
      return;
    }
    this.titleCase = this.titleCase.bind(this);
    this.columnNames = this.columnNames.bind(this);
    this.rows = this.rows.bind(this);
    this.sortColumn = this.sortColumn.bind(this);
    this.whichClass = this.whichClass.bind(this);
    this.DIRECTIONS = {ASC:'ASC', DESC:'DESC'};

    this.state = {
      orderColumn: this.columnNames()[0],
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
            {this.columnNames().map((columnName, i)=>(
              <th key={'columnName'+i}
                  onClick={()=>this.sortColumn(columnName)}
                  className={this.whichClass(columnName)}
                  >{this.titleCase(columnName)}</th>
            ))}
          </tr>

          {this.rows().map((rowObj, i)=>(
            <tr key={'row'+i}>
              {this.columnNames().map((item, j)=>(
                <td key={i+','+j}>{rowObj[item]}</td>
              ))}

              {this.props.actions.map((action, k)=>(
                <td key={'action'+k}>
                  <button onClick={()=>action.fn(rowObj)}
                          >{action.name}</button>
                </td>
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
    let names = Object.keys(this.props.data[0]);
    for (let i = 0; i < names.length; i++) {
      for (let hiddenColumn of this.props.hiddenColumns) {
        if (hiddenColumn === names[i]) {
          names.splice(i, 1);
        }
      }
    }
    return names;
  }
  rows() {
    let data = this.props.data;
    data.sort((a, b) => {
        let _a = a[this.state.orderColumn].toLowerCase();
        let _b = b[this.state.orderColumn].toLowerCase();
        if (_a < _b) {
            return this.state.orderDirection === this.DIRECTIONS.DESC ? -1 : 1;
        } else if (_a > _b) {
            return this.state.orderDirection === this.DIRECTIONS.DESC ? 1 : -1;
        } else {
            return 0;
        }
    });
    return data;
  }
  sortColumn(columnName) {
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
