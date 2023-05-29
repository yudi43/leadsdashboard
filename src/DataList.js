import React from 'react';

const DataList = ({ data }) => {
  return (
    <div>
      <h2>List of collected leads for AMC College</h2>
      <ul>
        {data.map(([key, entry]) => (
          <li key={key}>
            <strong>Name:</strong> {entry.name}, <strong>Phone:</strong> {entry.phone}, <strong>Email:</strong> {entry.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataList;
