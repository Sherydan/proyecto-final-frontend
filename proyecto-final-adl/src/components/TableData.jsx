import React from 'react';

const TableData = ({tableData, dataKeys}) => {
  console.log(tableData);
    return (
      <table className="table table-striped table-hover ">
        <thead>
          <tr>
            {dataKeys.length > 0 ? dataKeys.map((key) => (
              <th key={key}>{key}</th>
            )) : <th>Loading...</th>}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              {dataKeys.map((key) => (
                <td key={key}>{row[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

export default TableData;