import React from 'react';
import _ from 'lodash';

const whichClass = (column, state) => state.column === column ?
  state.direction : '';

const TableHeaders = ({columns, state, setSortState}) =>
  columns.map((column, i)=>
    <th key={'column'+i}
      onClick={()=>setSortState(column, state)}
      className={whichClass(column, state)}
      >{_.startCase(column)}</th>);

export default TableHeaders;
