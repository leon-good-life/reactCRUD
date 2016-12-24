import React from 'react'

const cells = (row, i, columns)=>columns.map((column, j)=>
  <td key={`${i},${j}`}>{row[column]}</td>
)
const actionButtons = (row, actions)=>actions.map((action, i)=>
  <button key={`action${i}`}
          onClick={()=>action.fn(row)}
          >{action.name}</button>
)
const tableRows = (rows, columns, actions)=>rows.map((row, i)=>
  <tr key={'row'+i}>
    {cells(row, i, columns)}
    {actions.length ? <td>{actionButtons(row, actions)}</td> : null}
  </tr>
)
const TableBody = ({rows, columns, actions}) => (
  <tbody>
    {tableRows(rows, columns, actions)}
  </tbody>
)

export default TableBody
