import React from "react";

const Table = ({data}) => {

  if(data.length === 0) return <p>No Data to display</p>

  const renderHeaders = () => {
    return (
      Object.keys(data[0]).map(key => (
        <th>{key}</th>
      ))
    )
  }
  const renderBody = () => {
    const tableBody = [];

    data.forEach(car => {
      let cells = [];
      Object.keys(data[0]).forEach(key => {
        cells.push(<td id="123">{car[key]}</td>);
      });
      tableBody.push(<tr>{cells}</tr>);
    });
    return tableBody
  };

  return (
    <div>
      <table>
        <tr>{renderHeaders()}</tr>
        {renderBody()}
      </table>
    </div>
  );
};

export default Table;
