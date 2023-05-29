import React, { useEffect, useState } from 'react';

const DataList = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous data fetch
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const headingStyle = {
    backgroundColor: '#009688',
    color: 'white',
    padding: '10px',
    margin: '0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '20px',
    paddingRight: '20px',
    marginBottom: '10px',
  };

  const totalCount = data.length;

  const listItemStyle = {
    borderBottom: '1px solid #ccc',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '20px',
    marginRight: '20px',
    textAlign: 'left',
  };

  const listItemHeaderStyle = {
    ...listItemStyle,
    backgroundColor: '#B2DFDB',
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: '20px',
  };

  const listItemIndexStyle = {
    color: "black",
    width: '30px',
    marginRight: '10px',
  };

  if (isLoading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>;
  }

  if (totalCount === 0) {
    return <div style={{ marginLeft: '20px' }}>No leads yet.</div>;
  }

  return (
    <div>
      <h2 style={headingStyle}>
        <span style={{ fontWeight: 'normal' }}>List of collected leads for AMC College</span>
        <span style={{ fontWeight: 'normal', fontSize: '18px' }}>
          Total entries: <strong style={{ fontWeight: 'bold', fontSize: '20px' }}>{totalCount}</strong>
        </span>
      </h2>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        <li style={listItemHeaderStyle}>
          <span style={listItemIndexStyle}>#</span>
          <span style={{ flex: 1, paddingLeft: '20px', color: 'black' }}>Name</span>
          <span style={{ flex: 1, paddingLeft: '20px', color: 'black' }}>Email</span>
          <span style={{ flex: 1, paddingLeft: '20px', color: 'black' }}>Phone</span>
        </li>
        {data.map(([key, entry], index) => (
          <li key={key} style={listItemStyle}>
            <span style={listItemIndexStyle}>{index + 1}.</span>
            <span style={{ flex: 1, paddingLeft: '20px', color: 'black' }}>{entry.name}</span>
            <span style={{ flex: 1, paddingLeft: '20px', color: 'black' }}>{entry.email}</span>
            <span style={{ flex: 1, paddingLeft: '20px', color: 'black' }}>{entry.phone}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;
